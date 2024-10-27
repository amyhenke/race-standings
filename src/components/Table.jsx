import React, { useEffect, useState } from 'react'
import { fetchStatsData } from '../lib/fetchData.js'
import CountryFlag from './CountryFlag.jsx';
import Spinner from './Spinner.jsx';

const Table = () => {

    // !! on mobile hide Nationality and Constructor
    const headings = ["Position", "Driver", "Nationality", "Constructor", "Points"];

    const [statsData, setStatsData] = useState([])
    const [loading, setLoading] = useState(true)

    // Initally only show top 10 standings
    const [showFullList, setShowFullList] = useState(false)

    useEffect(() => {
        const loadStats = async () => {
            try {
                const data = await fetchStatsData()
                setStatsData(data)

            } catch (error) {
                console.error('Error fetching data', error)
            } finally {
                setLoading(false)
            }
        }

        loadStats()

    }, [])

    return (
        <>
            { loading ? (
                <Spinner loading={loading} />
            ) : (
                <>
                    <table className={`w-full max-w-screen-xl mx-auto min-w-max table-auto text-left mb-20`}>
                        <thead>
                            <tr>
                                {headings.map((head, index) => (
                                <th key={head} className={`border-b border-blue-gray-100 bg-blue-gray-50 py-4 md:p-4 text-center ${index === 2 || index === 3 ? 'hidden md:table-cell' : ''}`}>
                                    <span className="leading-none opacity-70 text-white uppercase font-semibold">
                                        {head}
                                    </span>
                                </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {statsData.slice(0, showFullList ? statsData.length : 10).map(({ first_name, last_name, driver_country_code, season_team_name, season_points }, index) => {
                                const isLast = index === statsData.length - 1;
                                const classes = isLast ? "p-4 text-center text-white" : "py-4 md:p-4 text-center text-white border-b border-blue-gray-50 font-normal";
                                return (
                                    <tr key={index} >
                                        <td className={classes}>
                                            <span className="font-bold text-xl">
                                                {index + 1}
                                            </span>
                                        </td>
                                        <td className={classes}>
                                            <span>
                                                {first_name + ' ' + last_name}
                                            </span>
                                        </td>
                                        <td className={`${classes} hidden md:table-cell`}>
                                            <span className="font-normal text-center">
                                                <CountryFlag countryCode={driver_country_code} />
                                            </span>
                                        </td>
                                        <td className={`${classes} hidden md:table-cell`}>
                                            <span>
                                                {season_team_name}
                                            </span>
                                        </td>
                                        <td className={classes}>
                                            <span className="font-bold text-xl">
                                                {season_points}
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button 
                        onClick={() => setShowFullList((prevState) => !prevState)} 
                        className="fixed left-1/2 transform -translate-x-1/2 bottom-3 border border-white text-white bg-blue rounded-full py-2 px-4 mb-2 hover:text-blue hover:bg-white hover:border-white"
                    >
                        { showFullList ? 'LESS' : 'MORE'}
                    </button>
                </>
            )}
        </>
    )
}

export default Table
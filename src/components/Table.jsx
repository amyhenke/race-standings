import React, { useEffect, useState } from 'react'
import CountryFlag from './CountryFlag';
import Spinner from './Spinner';

const Table = () => {

    const X_API_KEY = import.meta.env.VITE_X_API_KEY

    // !! on mobile hide Nationality and Constructor
    const headings = ["Position", "Driver", "Nationality", "Constructor", "Points"];

    const [stats, setStats] = useState([])
    const [loading, setLoading] = useState(true)

    // Initally only show top 10 standings
    const [showFullList, setShowFullList] = useState(false)

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch("https://pitwall.redbullracing.com/api/stats/drivers/2023", {
                    headers: {
                        "x-api-key": X_API_KEY
                    }
                })
                const data = await res.json()

                setStats(data)

            } catch (error) {
                console.error('Error fetching data', error)
            } finally {
                setLoading(false)
            }
        }

        fetchStats()

    }, [])

    return (
        <>
            { loading ? (
                <Spinner loading={loading} />
            ) : (
                <>
                {/* {stats.map((stat) => (
                    <>
                        <p>{stat.last_name}</p>
                    </>
                ))} */}
                <table className="w-full max-w-screen-xl mx-auto min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {headings.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <span
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                                >
                                {head}
                                </span>
                            </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {stats.slice(0, showFullList ? stats.length : 10).map(({ first_name, last_name, driver_country_code, season_team_name, season_points }, index) => {
                            const isLast = index === stats.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                            return (
                                <tr key={index} >
                                    <td className={classes}>
                                        <span
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {index + 1}
                                        </span>
                                    </td>
                                    <td className={classes}>
                                        <span
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {first_name + ' ' + last_name}
                                        </span>
                                    </td>
                                    <td className={classes}>
                                        <span
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            <CountryFlag countryCode={driver_country_code} />
                                        </span>
                                    </td>
                                    <td className={classes}>
                                        <span
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {season_team_name}
                                        </span>
                                    </td>
                                    <td className={classes}>
                                        <span
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
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
                    className="fixed left-1/2 transform -translate-x-1/2 bottom-0 lefborder border-blue text-blue bg-white rounded-full p-2 mb-2 hover:text-white hover:bg-blue"
                >
                    { showFullList ? 'Less' : 'More'}
                </button>
                </>
            )}
        </>
    )
}

export default Table
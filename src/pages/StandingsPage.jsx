import React from 'react'
import VideoHero from '../components/VideoHero.jsx'
import Table from '../components/Table.jsx'
import { cloudinary } from '../lib/cloudinary.js'

const StandingsPage = () => {

    const cloudinaryVideo = cloudinary.video("Verstappen-Donuts_uxme4t").quality("auto").format("auto").toURL();

    return (
        <>
            <VideoHero video={cloudinaryVideo} />
            <div className="container max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-6xl font-extrabold text-white lg:text-6xl mb-20 text-center">
                    2023 Standings
                </h1>
                <Table />
            </div>
        </>
    )
}

export default StandingsPage
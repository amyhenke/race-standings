import React from 'react'

const VideoHero = ({ title, video }) => {

    return (
        <section className="relative flex overflow-hidden" style={{ minHeight: "50vh" }}>
            {/* Video */}
            <video src={video} className="absolute w-full h-full top-0 left-0 object-cover" autoPlay loop muted playsInline/>

            {/* Gradient */}
            <div className="gradient absolute top-0 left-0 w-screen h-full" style={{ background: 'linear-gradient(180.01deg, #001a30 0%, rgba(0, 22, 43, 0) 40%, #001a30 92.1%)' }}></div>

            {/* Text Container */}
            <div className="pt-40 pb-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col justify-between z-10">
                <h1 className="text-6xl font-extrabold text-white lg:text-6xl">
                    {title}
                </h1>
            </div>
        </section>
    )
}

export default VideoHero 
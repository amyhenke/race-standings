import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { AiOutlineCalendar } from "react-icons/ai";
import CountryFlag from './CountryFlag'
import { cloudinary } from '../lib/cloudinary.js'
import { fill } from '@cloudinary/url-gen/actions/resize';

const Hero = ({ title = "Monaco Grand Prix", date = "24 - 27 Nov 2023", location = "Monaco", country_code = "MC" }) => {

    const cloudinaryBG = cloudinary.image("hero-background_x8wtuh").resize(fill().width(1900)).toURL()
    const cloudinaryFG = cloudinary.image("hero-foreground_lif4z7").resize(fill().width(1900)).toURL()

    return (
        <section className="min-h-screen flex overflow-hidden">
            <ParallaxProvider>
                {/* Background Image */}
                <Parallax speed={5}>
                    <div className="absolute w-screen h-full top-0 left-0 inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cloudinaryBG})` }}></div>
                </Parallax>

                {/* Foreground Image */}
                <Parallax speed={-5}>
                    <div className="absolute w-screen h-full bottom-0 left-0">
                        <div className="absolute w-screen h-full top-0 left-0 inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cloudinaryFG})` }} />
                    </div>
                </Parallax>

                {/* Gradient */}
                <Parallax speed={0}>
                    <div className="gradient absolute bottom-0 left-0 w-screen h-2/5" style={{ background: 'linear-gradient(180.01deg, rgba(0, 22, 43, 0) 18.83%, #001a30 92.1%)' }}></div>
                </Parallax>

                {/* Text Container */}
                <div className="pt-40 pb-20 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col justify-between">
                    <Parallax speed={-7} className='h-full'>
                        <div className="flex flex-col justify-between h-full">
                            <h1 className="text-6xl font-extrabold text-white lg:text-9xl md:text-8xl sm:text-7xl">
                                {title}
                            </h1>
                            <div className="details text-white text-xl font-semibold hidden md:block">
                                <p className="my-4 uppercase flex gap-3">
                                    <AiOutlineCalendar size={25} />
                                    {date}
                                </p>
                                <p className="my-4 flex gap-3">
                                    <CountryFlag countryCode={country_code} style={{ width: '25px', margin: '0' }} />
                                    {location}
                                </p>
                            </div>
                        </div>
                    </Parallax>
                </div>

            </ParallaxProvider>
        </section>
    )
}

export default Hero 
import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const InnerHero = ({ title, background, foreground }) => {

    return (
        <section className="flex overflow-hidden" style={{ minHeight: "50vh" }}>
            <ParallaxProvider>
                {/* Background Image */}
                <Parallax speed={5}>
                    <div className="absolute w-screen h-full top-0 left-0 inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${background})` }} />
                </Parallax>

                {/* Foreground Image */}
                <Parallax speed={-5}>
                    <div className="absolute w-screen h-full bottom-0 left-0">
                        <div className="absolute w-screen h-full top-0 left-0 inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${foreground})` }} />
                    </div>
                </Parallax>

                {/* Gradient */}
                <Parallax speed={0}>
                    <div className="gradient absolute bottom-0 left-0 w-screen h-2/5" style={{ background: 'linear-gradient(180.01deg, rgba(0, 22, 43, 0) 18.83%, #00162B 92.1%)' }}></div>
                </Parallax>

                {/* Text Container */}
                <div className="pt-40 pb-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col justify-between">
                    <Parallax speed={-7} className='h-full'>
                        <div className="flex flex-col justify-between h-full">
                            <h1 className="text-6xl font-extrabold text-white lg:text-6xl">
                                {title}
                            </h1>
                        </div>
                    </Parallax>
                </div>

            </ParallaxProvider>
        </section>
    )
}

export default InnerHero 
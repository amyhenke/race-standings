import React from 'react'
import background from '../assets/cardrail-background.jpg'

const CardRail = ({ title = "Oracle In Practice" }) => {
  return (
    <section className="min-h-screen flex overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="py-10 w-full px-4 sm:px-6 lg:px-20 flex flex-col justify-between">
            <div className="flex flex-col justify-between h-full">
                <h1 className="text-3xl font-extrabold text-white lg:text-6xl md:text-5xl sm:text-4xl">
                    {title}
                </h1>
            </div>
        </div>
    </section>
  )
}

export default CardRail
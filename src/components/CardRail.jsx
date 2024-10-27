import React from 'react'
import background from '../assets/cardrail-background.jpg'
import Card from './Card'

const cards = [
    {
        title: "Oracle Virtual Lap in Monzo", category: "Virtual Lap", type: "Video", length: "6", image: "mediapreview1.jpg", href: "/virtual-lap-monza"
    },
    {
        title: "Oracle Strategy Guide", category: "Oracle Strategy Guide", type: "Video", length: "4", image: "mediapreview2.jpg", href: "/oracle-strategy-guide"
    },
    {
        title: "Oracle Cloud Telemetry Data", category: "Data", type: "Data", length: "3", image: "mediapreview3.jpg", href: "/telemetry-data"
    }
]

const CardRail = ({ title = "Oracle In Practice" }) => {
  return (
    <section className="min-h-screen flex overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="py-10 w-full pl-4 md:px-10 flex flex-col justify-between">
            <h2 className="text-3xl font-extrabold text-white lg:text-6xl md:text-5xl sm:text-4xl">
                {title}
            </h2>
            <div className="slider gap-4 flex overflow-x-auto lg:overflow-x-visible scroll-s pr-4" style={{ scrollSnapType: "x mandatory" }}>
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} category={card.category} type={card.type} length={card.length} image={card.image} href={card.href} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default CardRail
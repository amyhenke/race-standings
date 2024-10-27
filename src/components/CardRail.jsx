import React from 'react'
import background from '../assets/cardrail-background.jpg'
import { cardData } from '../lib/cardData'
import Card from './Card'

const CardRail = ({ title = "Oracle In Practice" }) => {
  return (
    <section className="min-h-screen flex overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="py-10 w-full pl-4 md:px-10 flex flex-col justify-between">
            <h2 className="text-3xl font-extrabold text-white lg:text-6xl md:text-5xl sm:text-4xl">
                {title}
            </h2>
            <div className="slider gap-4 flex overflow-x-auto lg:overflow-x-visible scroll-s pr-4 no-scrollbar" style={{ scrollSnapType: "x mandatory" }}>
                {cardData.map((card) => (
                    <Card key={card.id} id={card.id} title={card.title} slug={card.slug} category={card.category} type={card.type} length={card.length} image={card.image} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default CardRail
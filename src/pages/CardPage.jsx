import React from 'react'
import { cardData } from '../lib/cardData.js'
import { useLoaderData } from 'react-router-dom'
import InnerHero from '../components/InnerHero.jsx'
import background from '../assets/cardrail-background.jpg'

const CardPage = () => {
    const card = useLoaderData()
    return (
        <>
        <InnerHero title={card.title} background={`../${background}`} />
        <section className="min-h-screen overflow-hidden bg-cover bg-center text-white">
            <div className="pt-40 pb-10 w-full pl-4 md:px-10 max-w-screen-lg m-auto flex gap-10">
                <div className="image relative rounded-3xl min-w-72 min-h-72 bg-cover bg-center" style={{ backgroundImage: `url(../${card.image})`}}></div>
                <div className="text">
                    <div className="flex justify-between items-center mb-5">
                        <div className="category bg-white/[0.2] rounded-lg py-1 px-3">{ card.category }</div>
                        <div className="category">{ card.length } min read</div>
                    </div>
                    <p>{card.content.text}</p>
                </div>
            </div>
        </section>
        </>
    )
}

export const cardLoader = async ({params}) => {
    const { slug } = params

    try {
        // find the card which matches the current slug
        const card = cardData.find((card) => card.slug === slug)
        return card
    } catch (error) {
        console.error("Card not found")
    }
}

export default CardPage
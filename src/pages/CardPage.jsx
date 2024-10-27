import React, { useEffect } from 'react'
import { cardData } from '../lib/cardData.js'
import { useLoaderData } from 'react-router-dom'
import InnerHero from '../components/InnerHero.jsx'
import background from '../assets/cardrail-background.jpg'
import { cloudinary } from '../lib/cloudinary.js'
import { fill } from '@cloudinary/url-gen/actions/resize';

const CardPage = () => {
    const card = useLoaderData()

    // Resize cloudinary image for optimisation
    const cloudinaryImage = cloudinary.image(card.image).resize(fill().width(400)).toURL()

    return (
        <>
        <InnerHero title={card.title} background={`../${background}`} />
        <section className="overflow-hidden bg-cover bg-center text-white">
            <div className="pt-40 pb-10 w-full px-5 md:px-10 max-w-screen-lg m-auto flex gap-10 flex-wrap lg:flex-nowrap">
                <div className="image relative rounded-3xl min-w-72 min-h-72 bg-cover bg-center" style={{ backgroundImage: `url(${cloudinaryImage})`}}></div>
                <div className="text">
                    <div className="flex justify-between items-center mb-5 flex-wrap md:flex-nowrap">
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
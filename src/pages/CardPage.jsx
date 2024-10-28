import React, { useEffect } from 'react'
import { fetchCardData, fetchSingleCardData } from '../lib/fetchData.js'
import { useLoaderData } from 'react-router-dom'
import InnerHero from '../components/InnerHero.jsx'
import background from '../assets/cardrail-background.jpg'
import { cloudinary } from '../lib/cloudinary.js'
import { fill } from '@cloudinary/url-gen/actions/resize';

const CardPage = () => {
    const card = useLoaderData()
    // console.log("CARD DATA:", card)

    // Resize cloudinary image for optimisation
    const cloudinaryImage = cloudinary.image(card.image).resize(fill().width(400)).toURL()

    const cloudinaryVideo = cloudinary.video(card.content_video).quality("auto").format("auto").toURL();

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
                    <p>{card.content_text}</p>
                </div>
            </div>
            { cloudinaryVideo && (
                <div className="video-container max-w-screen-lg m-auto mb-20 px-5 md:px-10">
                    <video width="100%" controls>
                        <source src={cloudinaryVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </section>
        </>
    )
}

export const cardLoader = async ({params}) => {
    const { id, slug } = params

    try {
        // const card = await fetchSingleCardData(id)
        const card = await fetchSingleCardData(slug)

        // find the card which matches the current slug
        // const card = data.find((card) => card.slug === slug)

        if (!card || card.length === 0) {
            throw new Response("Card not found", {status: 404})
        }

        return card
    } catch (error) {
        console.error("Error loading card", error)
        throw new Response("Card not found", { status: 404 });
    }
}

export default CardPage
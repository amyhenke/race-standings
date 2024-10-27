import React, { useEffect, useState } from 'react'
import { fetchCardData } from '../lib/fetchData.js'
import Card from './Card'
import { cloudinary } from '../lib/cloudinary.js'
import { fill } from '@cloudinary/url-gen/actions/resize';
import Spinner from './Spinner';

const CardRail = ({ title = "Oracle In Practice" }) => {
    const cloudinaryBG = cloudinary.image("cardrail-background_vp8owv").resize(fill().width(1900)).toURL()

    const [cardData, setCardData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadCardData = async () => {
            try {
                const data = await fetchCardData()
                setCardData(data)

            } catch (error) {
                console.error('Error fetching cards', error)
            } finally {
                setLoading(false)
            }
        }

        loadCardData()

    }, [])

    return (
        <section className="min-h-screen flex overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${cloudinaryBG})` }}>
            <div className="py-10 w-full pl-4 md:px-10 flex flex-col justify-between">
                <h2 className="text-3xl font-extrabold text-white lg:text-6xl md:text-5xl sm:text-4xl">
                    {title}
                </h2>
                { loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="slider gap-4 flex overflow-x-auto lg:overflow-x-visible scroll-s pr-4 no-scrollbar" style={{ scrollSnapType: "x mandatory" }}>
                        {cardData.map((card) => (
                            <Card key={card.id} id={card.id} title={card.title} slug={card.slug} category={card.category} type={card.type} length={card.length} image={card.image} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default CardRail
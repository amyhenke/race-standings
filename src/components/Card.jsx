import React from 'react'
import { AiFillPieChart } from "react-icons/ai"
import { MdArticle } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { Link } from 'react-router-dom';


const Card = ({ id, title, slug, category, type, length, image }) => {
    const typeIcons = {
        "Video": IoIosPlay,
        "Data": AiFillPieChart,
    }

    const Icon = typeIcons[type] || MdArticle

    return (
        <div className="slider-item relative rounded-3xl min-w-80 min-h-96 bg-cover bg-center text-white p-5" style={{ backgroundImage: `url(${image})`, scrollSnapAlign: `start` }}>
            <Link key={id} to={`/card/${slug}`} className='h-full w-full flex flex-col justify-end'>
                <div className="gradient" style={{ background: 'linear-gradient(180.01deg, rgba(0, 22, 43, 0) 18.83%, #00162B 92.1%)' }}></div>
                <h3 className='font-semibold mb-3 text-xl'>{ title }</h3>
                <div className="type absolute top-5 right-5" aria-label={type}>
                    <Icon size={20} />
                </div>
                <div className="bottom flex justify-between items-center">
                    <div className="category bg-white/[0.2] rounded-lg py-1 px-3">{ category }</div>
                    <div className="category">{ length } min read</div>
                </div>
            </Link>
        </div>
    )
}

export default Card
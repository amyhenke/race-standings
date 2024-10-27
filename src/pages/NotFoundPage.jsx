import React from 'react'
import { Link } from 'react-router-dom'
import { cloudinary } from '../lib/cloudinary.js'
import { fill } from '@cloudinary/url-gen/actions/resize';

const NotFoundPage = () => {
    const cloudinaryBG = cloudinary.image("rb-drawing_wxpbxd").resize(fill().width(1900)).toURL()

    return (
        <>
            <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage:` url(${cloudinaryBG})`}}>
                <div className="gradient absolute top-0 left-0 w-screen h-full" style={{ background: 'linear-gradient(180.01deg, #001a30 0%, rgba(0, 22, 43, 0) 40%, #001a30 92.1%)' }}></div>
                <section className="text-center flex flex-col justify-center items-center h-96 relative pt-40">
                    <h1 className="text-white text-6xl font-bold mb-4">Page Not Found</h1>
                    <p className="text-white text-xl mb-5">This page does not exist</p>
                    <Link
                        to="/"
                        className="text-white bg-red hover:bg-indigo-900 rounded-full px-3 py-2 mt-4 uppercase"
                        >Go Back
                    </Link>
                </section>
            </div>
        </>
    )
}

export default NotFoundPage
import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../assets/rb-drawing.jpg"

const NotFoundPage = () => {
    return (
        <>
            <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage:` url(${bg})`}}>
                <section className="text-center flex flex-col justify-center items-center h-96">
                    <h1 className="text-white text-6xl font-bold mb-4">Page Not Found</h1>
                    <p className="text-white text-xl mb-5">This page does not exist</p>
                    <Link
                        to="/"
                        className="text-white bg-red hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
                        >Go Back
                    </Link>
                </section>
            </div>
        </>
    )
}

export default NotFoundPage
import React, { useEffect, useState } from 'react'
// using NavLink instead of NavLink as it works in similar way but adds a class to the active link
import { NavLink } from "react-router-dom"
import logo from '../assets/redbullracing-logo.png'

const NavBar = ({ className }) => {
    const linkClass = ({ isActive }) => isActive ? "text-white font-semibold rounded-lg mx-3 my-2 custom-underline-active relative uppercase" : "text-white font-semibold rounded-lg mx-3 my-2 custom-underline relative uppercase"

    const [bgColour, setBgColour] = useState("transparent")

    // Run when component renders
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setBgColour("bg-blue")
            } else {
                setBgColour("transparent")
            }
        }

        window.addEventListener('scroll', handleScroll)

        // remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        // Pass in different bg colour/styles depending on location
        // <nav className={className ? `${className}` : "bg-blue border-b border-blue fixed w-full z-10"}>
        // style={{ backgroundColor: bgColour }}
        <nav className={`fixed w-full z-20 ${bgColour}`} style={{transition: "background-color 0.3s ease"}}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-between md:items-stretch md:justify-start"
                    >
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img
                                className="h-10 w-auto"
                                src={logo}
                                alt="Red Bull Racing"
                            />
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex">
                                <NavLink
                                to="/"
                                className={ linkClass }>
                                    Home
                                </NavLink>
                                <NavLink
                                to="/standings"
                                className={ linkClass }>
                                    Standings
                                </NavLink>
                                <NavLink
                                to="/drivers"
                                className={ linkClass }>
                                    Drivers
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
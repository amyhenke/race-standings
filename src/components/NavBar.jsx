import React from 'react'
// using NavLink instead of NavLink as it works in similar way but adds a class to the active link
import { NavLink } from "react-router-dom"
import logo from '../assets/redbullracing-logo.png'

const NavBar = ({ className }) => {
    const linkClass = ({ isActive }) => isActive ? "text-white rounded-lg mx-3 my-2 custom-underline-active relative" : "text-white rounded-lg mx-3 my-2 custom-underline relative"

    return (
        // Pass in different bg colour/styles depending on location
        <nav className={className ? `${className}` : "bg-blue border-b border-blue"}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
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
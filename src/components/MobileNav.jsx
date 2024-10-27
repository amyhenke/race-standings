import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import logo from '../assets/redbullracing-logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

const MobileNav = () => {
    const linkClass = ({ isActive }) => isActive ? "text-white font-semibold rounded-lg mx-3 my-2 custom-underline-active relative uppercase" : "text-white font-semibold rounded-lg mx-3 my-2 custom-underline relative uppercase"

    const [isOpen, setIsOpen] = useState(false)
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
        <>
            <nav className={`fixed w-full z-20 block sm:hidden ${bgColour}`} style={{transition: "background-color 0.3s ease"}}>
                <div className="flex h-20 items-center justify-between px-8">
                    <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                        <img
                            className="h-10 w-auto"
                            src={logo}
                            alt="Red Bull Racing"
                        />
                    </NavLink>
                    <button onClick={() => setIsOpen(true)}>
                        <RxHamburgerMenu className='relative text-white' width={40} />
                    </button>
                </div>
            </nav>
            { isOpen &&
                <nav className='absolute top-0 right-0 w-screen h-screen z-20 bg-blue block sm:hidden'>
                    <div className="flex flex-col h-full w-full flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <CgClose onClick={() => setIsOpen(false)} className='absolute top-8 right-8 text-white' width={40} />
                        <NavLink
                        to="/"
                        className={ linkClass }
                        onClick={() => setIsOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink
                        to="/standings"
                        className={ linkClass }
                        onClick={() => setIsOpen(false)}>
                            Standings
                        </NavLink>
                        {/* <NavLink
                        to="/drivers"
                        className={ linkClass }
                        onClick={() => setIsOpen(false)}>
                            Drivers
                        </NavLink> */}
                    </div>
                </nav>
            }
        </>
    )
}

export default MobileNav
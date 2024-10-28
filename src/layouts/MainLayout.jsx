import React from 'react'
import NavBar from "../components/NavBar"
import MobileNav from '../components/MobileNav'

// The content of any page/route you're on, comes through the Outlet
import { Outlet, useLocation } from "react-router-dom"

const MainLayout = () => {
    const location = useLocation()
    const isHomePage = location.pathname === "/";

    return (
        <>
            <div className={`layout min-h-screen w-screen bg-blue`}>
                <NavBar />
                <MobileNav />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout
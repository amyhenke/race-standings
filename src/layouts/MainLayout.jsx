import React from 'react'
import NavBar from "../components/NavBar"

// The content of any page/route you're on, comes through the Outlet
import { Outlet, useLocation } from "react-router-dom"

const MainLayout = () => {
    const location = useLocation()
    const isHomePage = location.pathname === "/";

    return (
        <>
            <div className={`layout min-h-screen w-screen ${isHomePage ? 'bg-transparent' : 'bg-blue'}`}>
                <NavBar />
                {/* <NavBar className="bg-red" /> */}
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout
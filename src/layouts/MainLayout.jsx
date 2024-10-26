import React from 'react'
import NavBar from "../components/NavBar"

// The content of any page/route you're on, comes through the Outlet
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
        <div className="layout">
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
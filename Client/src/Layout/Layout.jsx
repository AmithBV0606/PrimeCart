import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import "./Layout.scss"

// Router-DOM
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
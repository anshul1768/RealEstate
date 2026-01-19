import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToHash from '../components/ScrollToHash.jsx'
const Layout = () => {
  return (
    <>
    <ScrollToHash/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
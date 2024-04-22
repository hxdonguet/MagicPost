import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function DefaultLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
    
  )
}

export default DefaultLayout
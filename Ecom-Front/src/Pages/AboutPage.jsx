import React from 'react'
import TopBar from '../Component/Layout/TopBar'
import About from '../Component/About/About'
import NavBar from '../Component/Layout/NavBar'
import Footer from '../Component/Layout/Footer'
import NavBarIcon from '../Component/Layout/NavBarIcon'

// Importing the CSS file for global styles

function AboutPage() {
  return (
    <div>
    <TopBar />
    <NavBarIcon />
    <About />
    <Footer />
    </div>
  )
}

export default AboutPage
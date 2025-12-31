import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import JoinSection from '../components/JoinSection'
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <JoinSection />
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default HomePage

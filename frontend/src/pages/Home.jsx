import HeroSection from '../components/home/HeroSection'
import ValueProposition from '../components/home/ValueProposition'
import SocialProof from '../components/home/SocialProof'
import WhatWeOffer from '../components/home/WhatWeOffer'
import WhyPixxelAI from '../components/home/WhyPixxelAI'
import Testimonials from '../components/home/Testimonials'
import CoreVerticals from '../components/home/CoreVerticals'
import IndustriesWeServe from '../components/home/IndustriesWeServe'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ValueProposition/>
      <SocialProof/>
      <WhatWeOffer/>
      <WhyPixxelAI/>
      <CoreVerticals/>
      <IndustriesWeServe/>
        <Testimonials/>
    </>
  )
}

export default Home
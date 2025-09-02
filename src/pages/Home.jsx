import React from 'react'
import Hero from '../components/Hero'
import Company from '../components/Company'
import Support from '../components/Support'
import Work from '../components/Work'
import Teams from '../components/Teams'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <div>
        <Hero />
        <Company />
        <Support />
        <Work />
        <Teams />
        <Contact />
    </div>
  )
}

export default Home
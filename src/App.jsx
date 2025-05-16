import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FetureSection from './components/FetureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


const App = () => {
  return (
<>
<Navbar/>
<div className='max-w-7xl mx-auto pt-10  px-6 lg:pt-0 '>
<HeroSection/>
<FetureSection/>
<Workflow/>
<Pricing/>
<Testimonials/>
<Footer/>
</div>





</>
  )
}

export default App
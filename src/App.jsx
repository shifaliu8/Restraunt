import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Work from './components/Work/Work'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className='App'>
  
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      

      
    </div>
    
  )
}

export default App
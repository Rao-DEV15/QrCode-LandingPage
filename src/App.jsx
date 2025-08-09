import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsSection from './components/ProductSection'
import Solutions from './components/Solutions'
import Footer from './components/Footer'
import QRBackground from './components/QRBackground' // new
import Qrquick from './components/qrtool/qrquick'
import InsightsSection from './components/InsightsSection'

const App = () => {
  return (  
    <div className="overflow-x-hidden w-full relative scroll-smooth">
       <Hero />
      <Qrquick/>
       <QRBackground/>
      <Navbar />
     
     
      <ProductsSection />
      <Solutions />
  <InsightsSection/> 
 <Footer /> 
    </div>
  )
}

export default App

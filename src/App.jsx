import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsSection from './components/ProductSection'
import Solutions from './components/Solutions'
import BlogSection from './components/BlogSection'
import Price from './components/Price'
import PriceSection from './components/PriceSection'
import Footer from './components/Footer'
import QRBackground from './components/QRBackground' // new

const App = () => {
  return (  
    <div className="overflow-x-hidden w-full relative scroll-smooth">
      <QRBackground/>
      <Navbar />
      <Hero />
     
      <ProductsSection />
      <Solutions />
      <BlogSection />
      <PriceSection />
      <Footer />
    </div>
  )
}

export default App

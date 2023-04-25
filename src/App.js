import React from 'react'
import TopBar from './components/Topbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Servise'
import Today from './components/Today'
import Schedule from './components/Schedule'
import Gallery from './components/Gallery'
import Price from './components/Price'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <TopBar />
      <Home />
      <About />
      <Today message="When in doubt, work out" img="/images/Today2.jpg" />
      <Service />
      <Schedule />
      <Today message="Get result you want" img="/images/Today.jpg"/>
      <Gallery />
      <Price />
      <Footer />
    </div>
  )
}

export default App

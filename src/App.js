import React from 'react'

import { About,Footer,Header,Skills,Testimonial,Work } from './container'

import './App.scss'

import { Navbar } from './components'
import Certifications from './container/Certifications/Certifications'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>

      <Certifications/>
      <Footer/>

    </div>
  )
}

export default App
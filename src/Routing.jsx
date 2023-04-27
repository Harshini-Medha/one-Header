import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import Landing from './components/Landing'

const Routing = () => {
  return (
   <>
   <BrowserRouter>
   

   <Header/>
   
   <Routes>

<Route path='/' element={<Landing/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/aboutus' element={<About/>}/>





   </Routes>
   
   
   
   
   
   </BrowserRouter>
   


   
   </>
  )
}

export default Routing

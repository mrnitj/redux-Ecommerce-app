import React from 'react'

import Home from './Components/Home'
import Products from './Components/Products'
import NavbarPage from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'



const MainRouter = () => {
  return (
    <div>
      <NavbarPage/>
       
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>} />
        </Routes>
        
    </div>
  )
}

export default MainRouter
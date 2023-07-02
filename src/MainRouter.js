import React from 'react'

import Home from './Components/Home'
import Products from './Components/Products'
import NavbarPage from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ViewDetails from './Components/ViewDetails'
import Cart from './Components/Cart'



const MainRouter = () => {
  return (
    <div>
      <NavbarPage/>
       
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>} />
            <Route path='/view/:productId' element={<ViewDetails/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
        
    </div>
  )
}

export default MainRouter
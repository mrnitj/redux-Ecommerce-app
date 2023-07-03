import React from 'react'

import Home from './Components/Home'
import Products from './Components/Products'
import NavbarPage from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ViewDetails from './Components/ViewDetails'
import Cart from './Components/Cart'
import Admin_Interface from './Components/Admin/Admin_Interface'



const MainRouter = () => {
  return (
    <div>
      <NavbarPage/>
       
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>} />
            <Route path='/view/:productId' element={<ViewDetails/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/admin' element={<Admin_Interface/>} />
        </Routes>
        
    </div>
  )
}

export default MainRouter
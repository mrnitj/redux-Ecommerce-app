import React from 'react'

import Home from './Components/Home'
import Products from './Components/Products'
import NavbarPage from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ViewDetails from './Components/ViewDetails'
import Cart from './Components/Cart'
import Admin_Interface from './Components/Admin/Admin_Interface'
import Admin_users from './Components/Admin/Admin_users'
import Admin_Products from './Components/Admin/Admin_Products'
import Admin_Edit from './Components/Admin/Admin_Edit'
import Admin_add_Products from './Components/Admin/Admin_add_Products'



const MainRouter = () => {
  return (
    <div>
      <div style={{position:'sticky',top:'0',zIndex:'999'}}>

      <NavbarPage/>
      </div>
       
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>} />
            <Route path='/view/:productId' element={<ViewDetails/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/admin' element={<Admin_Interface/>} />
            <Route path='/adminusers' element={<Admin_users/>} />
            <Route path='/adminproducts' element={<Admin_Products/>} />
            <Route path='/adminedit/:editId' element={<Admin_Edit/>} />
            <Route path='/adminaddproduct' element={<Admin_add_Products/>} />
        </Routes>
        
    </div>
  )
}

export default MainRouter
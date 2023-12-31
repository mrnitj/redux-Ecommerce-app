import React from 'react'

import Home from './Components/Home'
import Products from './Components/Products'
import NavbarPage from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ViewDetails from './Components/ViewDetails'
import Cart from './Components/Cart'
import Admin_Interface from './Components/Admin/Admin_Interface'
import Admin_users from './Components/Admin/Admin_users'
import Admin_Login from './Components/Admin/Admin_Login'


import UserLoging from './Components/UserLoging'
import UserRegister from './Components/UserRegister'
import Dealer_Interface from './Components/Dealer/Dealer_Interface'
import Dealer_Products from './Components/Dealer/Dealer_Products'
import Dealer_Add_Product from './Components/Dealer/Dealer_Add_Product'
import Dealer_Edit_Products from './Components/Dealer/Dealer_Edit_Products'
import Demo_design from './Demo_design'




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
            <Route path='/login' element={<UserLoging/>} />
            <Route path='/register' element={<UserRegister/>} />


            <Route path='/adminLogin' element={<Admin_Login/>} />
            <Route path='/admin' element={<Admin_Interface/>} />
            <Route path='/adminusers' element={<Admin_users/>} />



            {/* <Route path='/demo' element={<Demo_design/>} /> */}
            
            
            




            <Route path='/dealer' element={<Dealer_Interface/>} />         
            <Route path='/dealerproducts' element={<Dealer_Products/>} />         
            <Route path='/dealeraddproducts' element={<Dealer_Add_Product/>} />         
            <Route path='/dealereditdproducts/:editId' element={<Dealer_Edit_Products/>} />         
                 
        </Routes>
        
    </div>
  )
}

export default MainRouter
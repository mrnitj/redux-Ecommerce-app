import React, { useState } from 'react'

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink,Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Admin_users from './Admin_users';
import Admin_add_Products from './Admin_add_Products';
import Admin_Products from './Admin_Products';

const Admin_Interface = () => {
    const [childrens,setChildrens] = useState(<Admin_users/>)
  return (
    <>
    <Navbar style={{justifyContent:'center',backgroundColor:'rgb(51, 51, 51)',color:'white',fontSize:'30px',height:'4.5rem'}}>Welcome Admin</Navbar> 
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <Link to={'/'}  className="text-decoration-none" style={{ color: 'inherit' }}>
          Home
        </Link>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink exact onClick={() => setChildrens(<Admin_users/>)} activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact onClick={() => setChildrens(<Admin_Products/>)} activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="bars">Products</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact onClick={() => setChildrens(<Admin_add_Products/>)} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="shopping-cart">Add products</CDBSidebarMenuItem>
                            </NavLink>
          <NavLink exact to="/analytics" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="chart-line">Revenue</CDBSidebarMenuItem>
          </NavLink>

          <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '20px 5px',
          }}
        >
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
    {childrens}
  </div>
  </>
  )
}

export default Admin_Interface
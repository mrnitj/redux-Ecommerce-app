import React, { useState } from "react";

import { BsPersonRolodex } from "react-icons/bs";

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Admin_users from "./Admin_users";

import Dealer_Interface from "../Dealer/Dealer_Interface";

const Admin_Interface = () => {
    const [childrens, setChildrens] = useState(<Admin_users />);
    return (
        <>
            <Navbar
                style={{
                    justifyContent: "center",
                    backgroundColor: "rgb(51, 51, 51)",
                    color: "white",
                    fontSize: "30px",
                    height: "4.5rem",
                }}
            >
                Welcome Admin
            </Navbar>
            <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <Link to={"/"} className="text-decoration-none" style={{ color: "inherit" }}>
                            Home
                        </Link>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink exact onClick={() => setChildrens(<Admin_users />)} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="bars">Products</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">Revenue</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink
                                exact
                                onClick={() => setChildrens(<Dealer_Interface />)}
                                to="/dealer"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="user">Dealer</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: "center" }}>
                        <div
                            style={{
                                padding: "20px 5px",
                            }}
                        >
                            Sidebar Footer
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
                {childrens}
            </div>
        </>
    );
};

export default Admin_Interface;

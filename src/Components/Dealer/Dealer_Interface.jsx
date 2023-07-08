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
import Dealer_Products from "./Dealer_Products";
import Dealer_Add_Product from "./Dealer_Add_Product";

const Dealer_Interface = () => {
    const [children, setChildren] = useState(<Dealer_Products />);
    return (
        <>
            <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <Link to={"/admin"} className="text-decoration-none" style={{ color: "inherit" }}>
                            Admin
                        </Link>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink exact onClick={() => setChildren(<Dealer_Products />)} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="bars">Products</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink
                                exact
                                onClick={() => setChildren(<Dealer_Add_Product />)}
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="shopping-cart">Add Produtcs</CDBSidebarMenuItem>
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
                {children}
            </div>
        </>
    );
};

export default Dealer_Interface;

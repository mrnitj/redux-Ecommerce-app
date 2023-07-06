import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, Link } from "react-router-dom";

const NavbarPage = () => {
    const Navigate = useNavigate();

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" style={{ padding: "0", borderBottom: "1px solid grey" }}>
                <Container style={{ backgroundColor: "white", padding: "1rem" }} fluid>
                    <Navbar.Brand href="#" style={{ marginLeft: "5rem", color: "green" }} onClick={() => Navigate("/")}>
                        MY MART
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
                        <Link to={"/admin"} style={{ fontSize: "30px", margin: "0 1rem  0 1rem", color: "black" }}>
                            <MdOutlineAdminPanelSettings />
                        </Link>
                        <NavDropdown id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <Link to={"/cart"} style={{ fontSize: "30px", margin: "0 1rem  0 1rem", color: "black" }}>
                            <BsCart2 />
                        </Link>
                        <Nav.Link href="#action1" style={{ fontSize: "30px", margin: "0 1.5rem 0 1rem" }}>
                            <FaUserCircle />
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarPage;

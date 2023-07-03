import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Redux/Slices/CartSlice";
import { styled } from "styled-components";
import { GiShoppingBag } from 'react-icons/gi';

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    /* background-color: lightblue; */
    overflow: auto;
`;

const Cart = () => {

    const Navigate=useNavigate()

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeHandler = (e) => {
        const removeId = parseInt(e.target.id);
        dispatch(removeItem({ id: removeId }));
    };

    return (
        <>
            <section className="h-100" style={{ backgroundColor: "#eee" }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol md="10">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                                    Your Cart
                                </MDBTypography>
                                <div>
                                    <p className="mb-0">
                                        <span className="text-muted">Back To Shoping.. </span>
                                        <button onClick={() => Navigate('/products')} style={{border:'none',fontSize:'25px'}}><GiShoppingBag/></button>
                                    </p>
                                </div>
                            </div>
                            {/* ----- */}
                            <Container>
                                {cartItems.map((item) => (
                                    <MDBCard className="rounded-3 mb-4">
                                        <MDBCardBody className="p-4">
                                            <MDBRow className="justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        className="rounded-3"
                                                        fluid
                                                        src={item.image}
                                                        alt="Cotton T-shirt"
                                                    />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <p className="lead fw-normal mb-2">{item.title}</p>
                                      </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="3"
                                                    xl="2"
                                                    className="d-flex align-items-center justify-content-around"
                                                >
                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="minus" />
                                                    </MDBBtn>

                                                    <MDBInput min={0} defaultValue={1} type="number" size="sm" />

                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="plus" />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        ${item.price}
                                                    </MDBTypography>
                                                </MDBCol >
                                                <MDBCol>
                                                <button style={{background:'transparent'}} onClick={removeHandler} id={item.id}>Remove</button>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                ))}
                            </Container>
                            <MDBCol style={{display:'flex',justifyContent:'space-between'}}> 
                            
                            <button onClick={()=>dispatch(clearCart())}>Clear cart</button>
                           
                            <button>Buy Now</button>
                            </MDBCol>
                            {/* ------ */}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
};

export default Cart;

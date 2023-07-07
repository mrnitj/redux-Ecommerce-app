import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

import { GiShoppingBag } from "react-icons/gi";

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
import { removeProduct } from "../../Redux/Slices/productSlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    height: 90vh;

    /* background-color: lightblue; */
    overflow: auto;
`;

const Admin_Products = () => {
    const Navigate= useNavigate()

    const adminProducts = useSelector((state) => state.Prod);
    // console.log(adminProducts);

    const dispatch = useDispatch();

   

    const removeHandler = (e) => {
        const removeId = parseInt(e.target.id);
        dispatch(removeProduct({ id: removeId }));
    };

    return (
        <div style={{ height: "100vh", width: "100%", backgroundColor: "#3333" }}>
            <section className="h-100" style={{ backgroundColor: "#3333" }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol md="10">
                            {/* ----- */}
                            <Container>
                                {adminProducts.map((item) => (
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
                                                    <MDBInput min={0} defaultValue={1} type="number" size="sm" />
                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        ${item.price}
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol
                                                    style={{
                                                        width: "10rem",
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                    }}
                                                >
                                                    <button style={{ background: "transparent" }} onClick={() => Navigate(`/adminedit/${item.id}`)}>
                                                        Edit
                                                    </button>

                                                    <button
                                                        style={{ background: "transparent" }}
                                                        onClick={removeHandler}
                                                        id={item.id}
                                                    >
                                                        Remove
                                                    </button>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                ))}
                            </Container>

                            {/* ------ */}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </div>
    );
};

export default Admin_Products;

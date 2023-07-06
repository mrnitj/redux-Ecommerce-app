import React, { useState } from "react";
import { styled } from "styled-components";

import { GrLocation } from "react-icons/gr";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from "mdb-react-ui-kit";
import { categorieItem } from "../../Data_api";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`;

const Input = styled.div`
    display: flex;
    align-items: center;
    background-color: #eedfdf;
    border: 1px solid grey;
    height: 2rem;
    width: 15%;
    justify-content: space-between;

    input {
        padding-left: 1rem;
        width: 80%;
        height: 100%;
        border: none;
        outline: none;
        background-color: transparent;
    }
    .icon {
        display: flex;
        height: 100%;
        font-size: 28px;
    }
`;

const MiniCarts = styled.div`
    /* background-color:lightblue; */
    width: 90%;
`;

const Categories = () => {
    const [category, setCategory] = useState(categorieItem);

    const Navigate = useNavigate();

    return (
        <Container>
            <Input>
                <input type="text" placeholder="Location" />
                <div className="icon">
                    <GrLocation />
                </div>
            </Input>

            <MiniCarts>
                <MDBContainer fluid className="my-5 text-center">
                    <MDBRow style={{ display: "flex", justifyContent: "space-evenly" }}>
                        {category.map((item) => (
                            <MDBCol md="10" lg="3" className="mb-4 d-flex">
                                <MDBCard>
                                    <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom">
                                        <MDBCardImage src={item.img} fluid className="w-100" style={{ height: "221px" }} />
                                        <a href="#!">
                                            <div className="mask">
                                                <div className="d-flex justify-content-start align-items-end h-100">
                                                    <h5>
                                                        <span className="badge bg-primary ms-2">New</span>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="hover-overlay">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                ></div>
                                            </div>
                                        </a>
                                    </MDBRipple>
                                    <MDBCardBody>
                                        <a href="#!" className="text-reset">
                                            <h5 className="card-title mb-3">{item.title}</h5>
                                        </a>
                                        <a href="#!" className="text-reset">
                                            <p>{item.desc}</p>
                                        </a>
                                        <button>show</button>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))}
                    </MDBRow>
                </MDBContainer>
            </MiniCarts>
        </Container>
    );
};

export default Categories;

import React, { useEffect } from "react";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { productsList } from "../Redux/Slices/productSlice";
import { useNavigate } from "react-router-dom";

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

const Products = () => {
    const Navigate = useNavigate();

    const dispatch = useDispatch();
    const produc = useSelector((state) => state.Prod);
    // console.log('dispatched',produc);

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Error", err);
        });
        // console.log('response',response);
        dispatch(productsList(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("thhat goning to map", produc);

    return (
        <>
            <MDBContainer fluid className="my-5 text-center">
                <MDBRow>
                    {produc.map((item) => (
                        <MDBCol md="10" lg="3" className="mb-4 d-flex" key={item.id}>
                            <MDBCard style={{ width: "50rem" }}>
                                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom">
                                    <MDBCardImage src={item.image} fluid className="w-100" style={{ height: "350px" }} />
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
                                    <h5 className="card-title mb-3">{item.title}</h5>

                                    <p style={{ fontWeight: "bold", fontSize: "30px" }}>$ {item.price}</p>

                                    <button onClick={() => Navigate(`/view/${item.id}`)}>View</button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default Products;

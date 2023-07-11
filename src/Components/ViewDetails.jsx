import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../Redux/Slices/viewDetailsslice";

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
import { addItem } from "../Redux/Slices/CartSlice";

const ViewDetails = () => {
    const Navigate = useNavigate();

    const { productId } = useParams();
    const dispatch = useDispatch();

    // -------------
    const mainProducts = useSelector((state) => state.Prod);
    console.log("Main product////", mainProducts);

    // const itemId = mainProducts.filter((item) => item.id == productId);
    // ---------------

    const product = useSelector((state) => state.view);

    const produc = [product];

    // console.log('view product',produc);

    // console.log(productId);

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            dispatch(selectedProduct(response.data));
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetails();
        }
    }, [productId]);

    // --adding product to cart ---
    const p = useSelector((state) => state.cart);
    console.log("to cart.....", p);

    const addHandler = () => {
        const toCart = p.filter((item) => item.id == productId);

        if (toCart.length > 0) {
            return alert("Product already Exist");
        } else {
            dispatch(addItem(product));

            alert("Product added To cart!");
            Navigate("/cart");
        }
    };

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

                                    <button onClick={() => addHandler()}>Add Item</button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default ViewDetails;

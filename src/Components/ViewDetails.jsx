import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../Redux/Slices/viewDetailsslice";
import { styled } from "styled-components";

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

const MainContainer = styled.div`
padding: 6rem 6rem 10rem 6rem;
height: 100%;


/* background-color: #21b1ce; */
`;

const Container = styled.div`
display: flex;


/* background-color: #f0ecec; */
`;
const Cont_Left = styled.div`
padding: 2rem 2rem 3rem 2rem;
flex:1;
height: 100%;
/* background-color: #b33d3d; */
`;
const Left1 = styled.div`
display: flex;
justify-content: center;
height: 100%;
/* background-color: #000000; */

`;
const Cont_Right = styled.div`
flex: 1;
flex-direction: column;
display: flex;

justify-content: space-between;
/* background-color: #80ddf0; */
`;
const Right1 = styled.div`
display: flex;
flex-direction: column;
justify-content:space-evenly;
/* background-color: #e180f0; */
h3,h4{
    margin-bottom: 1rem;
}
`;
const Right2 = styled.div`
/* background-color: #658e67; */
    button{
        width: 100%;
        margin-bottom:5rem;
    }

`;


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
        
            <MainContainer>

            {
                produc.map((item) =>(
                    <Container>

            <Cont_Left>
                <Left1>
                    <img style={{height:'90%',width
                :'50%'}} src={item.image} alt="" />
                </Left1>
            </Cont_Left>
            <Cont_Right>
              <Right1>
                    <h2>{item.title}</h2>
                    <h4>"{item.description}"</h4>
                    <h3>$ {item.price}</h3>
                    <h5>rating</h5>
              </Right1>
              <Right2>
                <button onClick={() => addHandler()}>Add To Cart</button>
              </Right2>
            </Cont_Right>
        </Container>
                ))
            }

    </MainContainer>
           
       
    );
};

export default ViewDetails;

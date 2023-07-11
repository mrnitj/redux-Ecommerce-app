import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { editProduct } from "../../Redux/Slices/productSlice";


const Container = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    padding: 2rem;
`;
const MainContainer = styled.div`
    height: 100vh;
    background-color: #494444;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: white;

    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    input {
        margin: 0 0 2rem;
        outline: none;
        border: none;
        border-radius: 10px;
    }
    textarea {
        outline: none;
        border-radius: 10px;
    }
    button {
        border-radius: 10px;
        border: none;
    }
`;

const Dealer_Edit_Products = () => {

    const dealerProducts = useSelector((state) => state.Prod)
    console.log(dealerProducts);
  
    const dispatch = useDispatch()
    const Navigate = useNavigate()
   
    const {editId} = useParams()
    // console.log('geted id',editId);

    const filtered = dealerProducts.filter((e) => e.id == parseInt(editId))

    const titleRef = useRef(null)
    const imageRef = useRef(null)
    const priceRef = useRef(null)
    const descRef = useRef(null)

    const updateHandler =() =>{
        
        dispatch(
          editProduct({
            id:parseInt(editId),
            title : titleRef.current.value,
            image:imageRef.current.value,
            price:priceRef.current.value,
            description:descRef.current.value
            }
          )
        )
        Navigate('/dealerproducts')

    }

    

    return (
        <MainContainer>
            <Container>
                <Inputs>
                    <form action="">
                        {
                          filtered.map((item) => (

                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <label htmlFor="">Item Id</label>
                                    <input type="number"  defaultValue={item.id} />
                                    <label htmlFor="" >Item Image/url path</label>
                                    <input type="text" ref={imageRef} defaultValue={item.image} />
                                    <label htmlFor="">Item Name</label>
                                    <input type="text" ref={titleRef} defaultValue={item.title} />
                                    <label htmlFor="">Item Price</label>
                                    <input type="number" ref={priceRef} defaultValue={item.price}/>
                                    <label htmlFor="">Item Discription</label>
                                    <textarea className="additem" cols="30" rows="10" ref={descRef} defaultValue={item.description} />
                                    <button variant="outline-secondary" onClick={updateHandler} >Edit</button>
                                </div>
                          ))
                        }
                         
                    </form>
                </Inputs>
            </Container>
        </MainContainer>
    );
};

export default Dealer_Edit_Products;




// Dealer_Edit_Products
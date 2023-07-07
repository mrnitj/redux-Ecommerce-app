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

const Admin_Edit = () => {
  
    const adminProducts= useSelector((state) => state.Prod)

    const Navigate = useNavigate()
    const {editId} = useParams()
    console.log('editid id',editId);

    const refs = useRef(null)
    const dispatch = useDispatch()

    const filterdProduct = adminProducts.filter((e) => e.id === parseInt(editId))
    console.log('filtered',filterdProduct);

    const updateHandler = (e) => {
        const value = refs.current.value;

        dispatch (editProduct({
                id:editId,
                edited:value,
        }))
        Navigate('/adminproducts')
    }


    // console.log('edits produts',adminProducts);

    return (
        <MainContainer>
            <Container>
                <Inputs>
                    <form action="">
                        {
                            filterdProduct.map((item) => (
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <label htmlFor="">Item Id</label>
                                    <input type="number" ref={refs} defaultValue={item.id} />
                                    <label htmlFor="" >Item Image/url path</label>
                                    <input type="text" ref={refs} defaultValue={item.image}/>
                                    <label htmlFor="">Item Name</label>
                                    <input type="text" ref={refs} defaultValue={item.title}/>
                                    <label htmlFor="">Item Price</label>
                                    <input type="number" ref={refs} defaultValue={item.price}/>
                                    <label htmlFor="">Item Discription</label>
                                    <textarea className="additem" cols="30" rows="10" ref={refs} defaultValue={item.description}/>
                                    <button variant="outline-secondary" id={item.id} onClick={updateHandler}>Edit</button>
                                </div>
                            ))
                        }
                    </form>
                </Inputs>
            </Container>
        </MainContainer>
    );
};

export default Admin_Edit;

import React, { useContext, useRef } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addNewProduct, productsList } from "../../Redux/Slices/productSlice";



const Main_Container = styled.div`
    height: 100vh;
    background-color: #494444;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Cont_1 = styled.div`
    /* background-color: lightcyan; */
    height: 80%;
    width: 70%;
    display: flex;
    padding: 2rem;
`;

const Inputs = styled.div`
    /* background-color: #d8caca; */
    width: 100%;
    display: flex;
    flex-direction: column;
    color: white;
`;

const Dealer_Add_Product = () => {
    
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const handleSubmit = () => {
        const id = Date.now()
        const image = inputRef.current.pdUrl.value
        const title = inputRef.current.pdTitle.value
        const price = inputRef.current.pdPrice.value
        const discription = inputRef.current.pdDesc.value
        
        dispatch(addNewProduct({id,image,title,price,discription}))
    }


  return (
    <Main_Container>
            <Cont_1>
                <Inputs>
                    <form
                        ref={inputRef}
                        
                        style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}
                    >
                       
                        <label htmlFor="">Item Image/url path</label>
                        <input className="additem" type="text" name="pdUrl" />
                        <label htmlFor="">Item Name</label>
                        <input className="additem" type="text" name="pdTitle" />
                        <label htmlFor="">Item Price</label>
                        <input className="additem" type="number" name="pdPrice" />
                     
                        <label htmlFor="">Item Discription</label>
                        <textarea className="additem" name="pdDesc" id="" cols="30" rows="10" />
                        <Button variant="outline-secondary" style={{ fontSize: "20px" }} onClick={handleSubmit}>
                            Add
                        </Button>
                    </form>
                </Inputs>
            </Cont_1>
        </Main_Container>
  )
}

export default Dealer_Add_Product
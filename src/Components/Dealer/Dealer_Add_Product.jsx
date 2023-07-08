import React, { useContext, useRef } from "react";
import { Button } from "react-bootstrap";
import { styled } from "styled-components";



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
  return (
    <Main_Container>
            <Cont_1>
                <Inputs>
                    <form
                        action=""
                        
                        style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}
                    >
                        <label htmlFor="">Item Id</label>
                        <input className="additem" type="number" name="pdId" />
                        <label htmlFor="">Item Image/url path</label>
                        <input className="additem" type="text" name="pdUrl" />
                        <label htmlFor="">Item Name</label>
                        <input className="additem" type="text" name="pdTitle" />
                        <label htmlFor="">Item Price</label>
                        <input className="additem" type="number" name="pdPrice" />
                        <label htmlFor="">Item Model</label>
                        {/* <input className="additem" type="text" name="pdModel" /> */}
                        <select name="pdModel" id="">
                            <option value="dress">Dress</option>
                            <option value="footwear">Footwear</option>
                            <option value="toys">Toys</option>
                        </select>
                        <label htmlFor="">Item Discription</label>
                        <textarea className="additem" name="" id="" cols="30" rows="10" />
                        <Button variant="outline-secondary" style={{ fontSize: "20px" }}>
                            Add
                        </Button>
                    </form>
                </Inputs>
            </Cont_1>
        </Main_Container>
  )
}

export default Dealer_Add_Product
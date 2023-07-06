import React from "react";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import Categories from "./Comp2.jsx/Categories";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    background-color: rgba(187, 191, 199, 0.322);
    /* height: 22.8125rem; */
    padding: 2rem 0 2rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Cont_1 = styled.div`
    /* background-color: lightcoral; */
    height: 80%;
    width: 50%;
`;

const Cont_2 = styled.div`
    /* background-color: lightcyan; */
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    button {
        margin-top: 1rem;
        background-color: lightgreen;
        border: none;
        padding: 10px 15px 10px;
        font-size: 12px;
        color: white;
        font-weight: bold;
    }
`;
const Cont_c1 = styled.div`
    /* background-color: #c0afaf; */
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 1rem 0 2rem;
    /* align-items: center; */
`;
const Cont_c2 = styled.div`
    /* height:50px; */
    text-align: center;
    /* background-color: blue; */
    padding: 0 0.5rem 0;
`;

const Home = () => {
    const Navigate = useNavigate();

    return (
        <div>
            <Container>
                <Cont_1>
                    <Cont_2>
                        <Cont_c1>
                            <h1>Order from your nearest Supermarket</h1>
                        </Cont_c1>
                        <Cont_c2>
                            <p>
                                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                                At nam minimum ponderum. Est audiam animal molestiae te.
                            </p>
                        </Cont_c2>
                        <button onClick={() => Navigate("/products")}>ORDER NOW</button>
                    </Cont_2>
                </Cont_1>
            </Container>
            <Categories />
        </div>
    );
};

export default Home;

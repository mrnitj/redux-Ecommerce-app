import React from "react";

import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from "cdbreact";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
background-color: lightblue;
height: 100vh;
width: 100%;
display: flex;
align-items: center;
 .CDBContainer{
    display: flex;
    justify-content: center;
}
/* justify-content: center; */

`;

const UserLoging = () => {
    return (
        <Container>
            <CDBContainer className="CDBContainer">
                <CDBCard style={{width: "30rem"}}>
                    <CDBCardBody className="mx-4">
                        <div className="text-center mt-4 mb-2">
                            <p className="h4"> Sign in </p>
                        </div>
                        <form action="">


                        <CDBInput material hint="E-mail" placeholder="Email.." type="email" />
                        <CDBInput material hint="Password" placeholder="Password.." type="password" />
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                            <CDBInput type="Checkbox" />
                            <p className="m-0">Remember me</p>
                            <CDBLink to="#">Forgot Password ?</CDBLink>
                        </div>
                        <CDBBtn color="dark" className="btn-block my-3 mx-0">
                            Sign in
                        </CDBBtn>
                        <p className="text-center">
                            Not a member?{" "}
                            <Link to={'/register'}  className="d-inline p-0"  style={{textDecoration:'none'}}>
                                Register
                            </Link>
                        </p>
                        <p className="text-center"> or sign in with</p>
                        <div className="flex-row my-3 d-flex justify-content-center">
                            <CDBBtn color="white" style={{ boxShadow: "none", color:'blue' }}>
                                <CDBIcon fab icon="facebook-f" />
                            </CDBBtn>
                            <CDBBtn color="white" className="m-0" style={{ boxShadow: "none", color:'lightblue' }}>
                                <CDBIcon fab icon="twitter" />
                            </CDBBtn>
                            <CDBBtn color="white" style={{ boxShadow: "none", color:'red' }}>
                                <CDBIcon fab icon="google-plus-g" />
                            </CDBBtn>
                        </div>
                        </form>
                    </CDBCardBody>
                </CDBCard>
            </CDBContainer>
        </Container>
    );
};

export default UserLoging;

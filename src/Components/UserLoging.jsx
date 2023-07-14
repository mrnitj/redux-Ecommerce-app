import React, { useRef } from "react";
import axios from "axios";

import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from "cdbreact";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
background-color: #a5a1a1;

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

    const inputRef = useRef(null);
    const Navigate = useNavigate()
    

    const Users = useSelector((state) => state.user)
    console.log(Users);

    const handleSubmit = () =>{
        const Email = inputRef.current.email.value;
        const Password = inputRef.current.password.value;

        
axios.post('http://localhost:4000/admin/login', {
    userName: 'Email',
    password: 'password'
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

        // const userDetails = Users.filter((item) => item.userEmail === Email && item.userPassword === Password)
        // console.log('userdealtails',userDetails);

        // if(userDetails.length > 0){
        //     Navigate('/')
        //     alert('loging Sucssefull')

        // }
        // else{
        //     alert('Please try againg')
        // }   
    }



    return (
        <Container>
            <CDBContainer className="CDBContainer">
                <CDBCard style={{width: "30rem",borderRadius:'10%'}}>
                    <form 
                    ref={inputRef}
                    onSubmit={(e) => e.preventDefault()}>


                    <CDBCardBody className="mx-4">
                        <div className="text-center mt-4 mb-2">
                            <p className="h4"> Sign in </p>
                        </div>
                        <CDBInput material hint="E-mail" placeholder="Email.." type="email" name='email' />
                        <CDBInput material hint="Password" placeholder="Password.." type="password" name='password' />
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                            <CDBInput type="Checkbox" />
                            <p className="m-0">Remember me</p>
                            <CDBLink to="#">Forgot Password ?</CDBLink>
                        </div>
                        <CDBBtn color="dark" className="btn-block my-3 mx-0" onClick={handleSubmit}>
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
                        
                    </CDBCardBody>
                    </form>
                </CDBCard>
            </CDBContainer>
        </Container>
    );
};

export default UserLoging;

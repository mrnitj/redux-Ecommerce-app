import React from 'react'

import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
/* background-color: lightcoral; */
height: 100vh;
width:100%;
display: flex;
justify-content: center;
align-items: center;
.CDBContainer{
    display: flex;
    justify-content: center;
}
`;


const UserRegister = () => {
  return (
    <Container>


    <CDBContainer className='CDBContainer'>
      <CDBCard style={{ width: '30rem'}}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4"> Sign up </p>
          </div>
          <div className="form-flex-row mb-n4">
            <div className="col">
              <CDBInput material hint="First name" placeholder='"First name..' type="text" />
            </div>
            <div className="col">
              <CDBInput material hint="Last name" placeholder='"Last name..' type="text" />
            </div>
          </div>
          <CDBInput material hint="E-mail" placeholder='"Email..' type="email" />
          
          <CDBInput material hint="Password" placeholder='"Password..' type="password" />
          <CDBInput material hint="Phone number"placeholder='"Phone number..' type="text" />
          <p className="text-muted text-center small mt-n4">
            Optional - for two step authentication
          </p>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <CDBInput type="Forms" />
            <p className="m-0">Subscribe to our newsletter</p>
          </div>
          <CDBBtn color="dark" className="btn-block my-3 mx-0">
            Sign up
          </CDBBtn>
          <p className="text-center"> or sign up with</p>
          <div className="flex-row mb-3 d-flex justify-content-center">
            <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none',color:'blue' }}>
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none',color:'lightblue' }}>
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' ,color:'red' }}>
              <CDBIcon fab icon="google-plus-g" />
            </CDBBtn>
          </div>
          <p className="text-center m-0">
            Already have an account?{' '}
            <Link className="d-inline p-0" to="/login" style={{textDecoration:'none'}}>
              Sign In
            </Link>
          </p>
          <hr />
          <p className="text-center">
            By clicking <em>Sign up</em> you agree to our{' '}
            <CDBLink className="d-inline p-0" to="#">
              terms of service
            </CDBLink>
          </p>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
    </Container>
  )
}

export default UserRegister
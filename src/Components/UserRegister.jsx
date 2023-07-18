import React, { useRef } from 'react'
import axios from 'axios';

import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userList } from '../Redux/Slices/UsersSlice';

const Container = styled.div`
background-color: #a5a1a1;
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

  const inputRef = useRef(null) 
  const Navigate = useNavigate()
  const Users = useSelector((state) => state.user)
 
  

  const dispatch = useDispatch()

  const handleSubmit = async() => {

    const firstName = inputRef.current.firstname.value;
    const secondName = inputRef.current.secondname.value;
    const userEmail = inputRef.current.email.value;
    const userPassword = inputRef.current.password.value;
    const userPhone = inputRef.current.phone.value;

   await axios.post('http://localhost:4000/users/register', {
            firstName: firstName,
            secondName: secondName,
            email: userEmail,
            password: userPassword,
            phone: userPhone,
            // location: 'New York',
            // address: '123 Main St',
            // flatNo: 'A1'
            })
            .then(response => {
                console.log(response.cookie);
            })
            .catch(error => {
                console.error(error);
            });

    // dispatch(userList({firstName,secondName,userEmail,userEmail,userPassword,userPhone}))
    // Navigate('/login')
  }

  return (
    <Container>


    <CDBContainer className='CDBContainer'>
      <CDBCard style={{ width: '30rem',borderRadius:'10%'}}>
        <form ref={inputRef}
        onSubmit={(e) => {
          e.preventDefault()
        }} >

        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4"> Sign up </p>
          </div>
          <div className="form-flex-row mb-n4">
            <div className="col">
              <CDBInput material hint="First name" placeholder='"First name..' type="text" name='firstname' />
            </div>
            <div className="col">
              <CDBInput material hint="Last name" placeholder='"Last name..' type="text" name='secondname' />
            </div>
          </div>
          <CDBInput material hint="E-mail" placeholder='"Email..' type="email" name='email' />
          
          <CDBInput material hint="Password" placeholder='"Password..' type="password" name='password' />
          <CDBInput material hint="Phone number"placeholder='"Phone number..' type="number"  name='phone'/>
          <p className="text-muted text-center small mt-n4">
            Optional - for two step authentication
          </p>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <CDBInput type="Forms" />
            <p className="m-0">Subscribe to our newsletter</p>
          </div>
          <CDBBtn color="dark" className="btn-block my-3 mx-0"  onClick={handleSubmit}>
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
        </form>
      </CDBCard>
    </CDBContainer>
    </Container>
  )
}

export default UserRegister
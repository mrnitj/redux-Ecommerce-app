
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
   height: 80%;
    width: 70%;
    display: flex;
    padding:2rem;
    

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

  form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  input{
    margin: 0 0 2rem;
    outline: none;
    border:none;
    border-radius: 10px;
  }
  textarea{
    outline: none;
    border-radius: 10px;

  }
  button{
    border-radius: 10px;
    border:none;
    

  }
;

 
`;

const Admin_Edit = () => {
  return (
    <MainContainer>
      <Container>
        <Inputs>
            <form action="">
            <label htmlFor="">Item Id</label>
      <input type="number" />
      <label  htmlFor="">Item Image/url path</label>
      <input type="text"  />
      <label htmlFor="">Item Name</label>
      <input type="text"  />
      <label htmlFor="">Item Price</label>
      <input type="number"  />
      <label htmlFor="">Item Discription</label>
      <textarea className="additem"  cols="30" rows="10"/>
      <button variant="outline-secondary">Edit</button>
            </form>
        </Inputs>
      </Container>
    </MainContainer>
  )
}

export default Admin_Edit
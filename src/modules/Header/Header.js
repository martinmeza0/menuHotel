import React from 'react'
import styled from 'styled-components';
import background from './background.jpg'
const Header = () => {
  return (  
    <>
      <HeaderContainer>
        <h1> Hotel Menu</h1>
        <p>The best food just for you.</p>
      </HeaderContainer>  
    </>
  )
}

const HeaderContainer = styled.header`
  background: url(${background}) no-repeat fixed center;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > h1 {
    padding: 20px;
    text-align: center;
  }
`

export default Header;

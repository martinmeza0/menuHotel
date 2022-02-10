import React from 'react';
import styled from 'styled-components';
import img from './background.jpg'
const Header = () => {
  return (  
    <headerContainer className='Header'>
      <h1> Hotel Menu</h1>
    </headerContainer>
    
  );
};

const headerContainer = styled.header`
  background-image: url
`;


export default Header;

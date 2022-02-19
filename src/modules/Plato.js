import React from 'react';
import styled from 'styled-components';

const Plato = ({recipe}) => {
  const {title, image, url, servings, summary} = recipe
  return (
    <>
      <Recipe>
        <div className='img__container'>
          <Image src={image} alt={title}></Image>
        </div>
        <div className='information'>
          <h2>{title}</h2>
          <span>Servings for {servings} persons</span>
          <p dangerouslySetInnerHTML={{__html: summary}}></p>
          <a href={url} target="_blank" rel="noopener noreferrer">link</a>
        </div>
      </Recipe>
    </>
  )
};

const Recipe = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: row;
  /* justify-content: space; */
  margin-bottom: 15px;
  text-align: center;
  & > .img__container {
    width: 30%;
  }

  & > .information {
    width: 70%;
    padding: 0px 5px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`
export default Plato;

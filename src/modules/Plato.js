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
          {title ? <h2>{title}</h2> : <></>}
          {servings ? <span>{servings} servings per person</span> : <></>}
          {summary ? <p dangerouslySetInnerHTML={{__html: summary}}></p> : <></>}
          {url ? <a href={url} target="_blank" rel="noopener noreferrer">link</a> : <></>}
        </div>
      </Recipe>
    </>
  )
};

const Recipe = styled.div`
  background-color: #f6bd60;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
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

import React from 'react';

const Plato = ({recipe}) => {
  const {title, image, url, servings, summary} = recipe
  return (
    <>
      <div className="recipe">
        <h2>{title}</h2>
        <img src={image} alt={title}></img>
        <span>{servings}</span>
        <p>{summary}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">link</a>
      </div>
    </>
  )
};

export default Plato;

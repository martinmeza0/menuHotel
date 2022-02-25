import React from 'react'
import styled from 'styled-components'

const MenuDetails = ({recipes}) => {
  const recipesInformation = recipes
  const sumValues = (array) => {
    return array.reduce((a, b) => a + b, 0);
  }

  let healthScore = recipesInformation.map(recipe => recipe.healthScore)
  let price = recipesInformation.map(recipe => recipe.pricePerServing)
  let cookingTime = recipesInformation.map(recipe => recipe.readyInMinutes)
  return (
    <MenuContainer>
      <p><span className="iconify" data-icon="dashicons:money-alt"></span>Price: ${sumValues(price)}</p>
      <p><span className="iconify" data-icon="ic:outline-timer"></span>Estimate cooking time: {sumValues(cookingTime)} minutes</p>
      <p><span className="iconify" data-icon="fluent:food-apple-20-regular"></span>Helth score of the menu: {sumValues(healthScore)} points</p>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  background-color: #9b2226;
  & > p {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
  }
`
export default MenuDetails
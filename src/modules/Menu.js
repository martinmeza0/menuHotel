import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import Plato from './Plato'
import { getAllFood } from '../services/foodApi'
import styled from 'styled-components'
import MenuDetails from './MenuDetails';

const Menu = () => {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    getAllFood()
      .then((request) => {
        setRecipes(request.data.recipes)
    })
  }, [])

  return (
    <>
      <MenuContainer>
        <MenuDetails recipes={recipes}></MenuDetails>
        {recipes !== [] && recipes.map(recipe => 
        <Plato key={uuidv4()} recipe={recipe} ></Plato>)}
      </MenuContainer>
    </>
  )
}

const MenuContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export { MenuContainer };
export default Menu
import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import Plato from './Plato'
import { getFood } from '../services/foodApi'
import styled from 'styled-components'

const Menu = () => {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    getFood()
      .then((request) => {
        setRecipes(request.data.recipes)
    })
  }, [])

  return (
    <>
      <MenuContainer>
        {recipes !== [] && recipes.map(recipe => 
        <Plato key={uuidv4()} recipe={recipe} ></Plato>)}
      </MenuContainer>
    </>
  )
}

const MenuContainer = styled.main`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: space-around;

  /* padding: 20px; */
`

export default Menu
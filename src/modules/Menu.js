import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import Plato from './Plato'
import { getFood } from '../services/foodApi'

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
      <div className="recipes container">
        {recipes !== [] && recipes.map(recipe => 
        <Plato key={uuidv4()} recipe={recipe} ></Plato>)}
      </div>
    </>
  )
}

export default Menu
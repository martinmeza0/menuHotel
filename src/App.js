import React, {useState, useEffect} from 'react'
import GlobalStyle from './GlobalStyle'
import Plato from './modules/Plato';
import Header from './modules/Header/Header'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
function App() {
  const [recipes, setRecipes] = useState([])
  useEffect (() => {
  const getFood = async () => {
    const Api_key = '04716efb5a364470a00f908692393609'
    const apiUrl = `https://api.spoonacular.com/recipes/random?number=4&apiKey=${Api_key}`
    // const apiUrl = 'https://jsonplaceholder.typicode.com/todos/'
    const request = await axios.get(apiUrl)
    setRecipes(request.data.recipes)
    console.log(request)
}
    getFood()
  }, [])
  return (
    <>
      <GlobalStyle/>
      <Header></Header>
      <div className="recipes container">
        {recipes !== [] && recipes.map(recipe => 
        <Plato key={uuidv4()} recipe={recipe} ></Plato>)}
      </div>
    </>
  );
}

export default App
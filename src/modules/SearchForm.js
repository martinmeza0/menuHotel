import React, {useState, useEffect} from 'react'
import { getFood } from '../services/foodApi'
import { MenuContainer } from '../modules/Menu'
import Plato from '../modules/Plato'

const SearchForm = () => {
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getFood(query)
            .then((request) => {
            setRecipes(request.data.results)
            })
    }, [query]);
    const onChange = e => {
        setSearch(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        setQuery(search)
        console.log(recipes)
    }
  return (
    <>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Search a dish" autoComplete="off" onChange={onChange}/>
            <input type="submit" value="search"/>
        </form>
        <MenuContainer>
            {recipes !== [] && recipes.map(recipe => 
            <Plato key={recipe.id} recipe={recipe} ></Plato>)}
        </MenuContainer>
    </>
  )
}

export default SearchForm
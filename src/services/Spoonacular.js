import axios from 'axios'

const getFood = async () => {
    const Api_key = '04716efb5a364470a00f908692393609'
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${Api_key}`
    const request = await axios.get(apiUrl)
    console.log(request)
}

export default { getFood }
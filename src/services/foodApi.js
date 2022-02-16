import axios from 'axios'

export const getFood = async () => {
    const Api_key = '04716efb5a364470a00f908692393609'
    const apiUrl = `https://api.spoonacular.com/recipes/random?number=4&apiKey=${Api_key}`
    const request = await axios.get(apiUrl)
    return request
}

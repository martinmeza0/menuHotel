import axios from 'axios'
const Api_key = '04716efb5a364470a00f908692393609'

export const getAllFood = async () => {
    const apiUrl = `https://api.spoonacular.com/recipes/random?type=main+course&number=4&apiKey=${Api_key}`
    const request = await axios.get(apiUrl)
    return request
}

export const getFood = async (query) => {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?number=10&query=${query}&apiKey=${Api_key}`
    const request = await axios.get(apiUrl)
    return request
}


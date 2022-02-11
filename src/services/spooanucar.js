import axios from 'axios'
const apiUrl = 'https://api.spoonacular.com/food/menuItems/'

export const spoonacular = async () => {
    const request = await axios.get(apiUrl)
    return request.then(res => res.data)
}
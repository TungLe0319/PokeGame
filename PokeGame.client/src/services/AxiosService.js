import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const pokeAPI = Axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 8000,
});

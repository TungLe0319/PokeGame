import { dbContext } from "../db/DbContext"

class PokemonService{
   async getPokemonNames() {
 const pokemonNames = await dbContext.Pokes.find()
 return pokemonNames
  }
  async addPokes(pokeData) {
    const poke = await dbContext.Pokes.create(pokeData)
    return poke
  }

}
export const pokemonService = new PokemonService()
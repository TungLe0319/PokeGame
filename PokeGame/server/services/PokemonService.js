import { dbContext } from "../db/DbContext"

class PokemonService{
  async addPokes(pokeData) {
    const poke = await dbContext.Pokes.create(pokeData)
    return 'added Poke'
  }

}
export const pokemonService = new PokemonService()
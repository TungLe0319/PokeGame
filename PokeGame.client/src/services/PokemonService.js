import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { PokemonDetail } from "../models/PokemonDetail.js";
import { router } from "../router.js";
import { api, pokeAPI } from "./AxiosService.js";

class PokemonService {
  async getAllPokemon() {
    const res = await pokeAPI.get("pokemon", {
      params: {
        limit: 50,
      },
    });
    // console.log(res.data.results);
    let pokemons = res.data.results.map((p) => new Pokemon(p));

    // pokemons.forEach(async(poke) => {
    //   const pokes = await this.getPokemon(poke.id)
    // })
    for (const poke of pokemons) {
      // const pokemon = await api.post('api/pokemon/poke', poke
      // )
      // console.log(pokemon);
      const pokemon = await this.getPokemon(poke.pokeId);
      // console.log(pokemon);
      AppState.pokemon.push(pokemon);
    }

  }
  async getPokemon(id) {
    const res = await pokeAPI.get(`pokemon/${id}`);
    // console.log(res.data);
    return new PokemonDetail(res.data);
  }

  async getPokemonNames(){
    const res = await api.get('api/pokemon/poke')
    console.log(res.data);
    AppState.pokemonName = res.data.map(p=> p)
    // console.log(AppState.pokemonName);
  }
  async getPokemonDetails(id) {
    const res = await pokeAPI.get(`pokemon/${id}`);
    // console.log("[activePokemon]", res.data);
    //  console.log(AppState.activePokemon);
    AppState.activePokemon = new PokemonDetail(res.data);
    // console.log(AppState.activePokemon);
  }

  async searchByQuery(name){
    const res = await pokeAPI.get(`pokemon/${name}`);
    AppState.activePokemon = new PokemonDetail(res.data)
    // router.push({name:'Details',params:{name: name}})
  
  }

  async getRandomPokemon(){
    let id = Math.floor(Math.random() * 1000)
    // console.log(id);
      const res = await pokeAPI.get(`pokemon/${id}`);
    console.log("[activePokemon]", res.data);
    //  console.log(AppState.activePokemon);
    AppState.activePokemon = new PokemonDetail(res.data);
    // console.log(AppState.activePokemon);
  }
 async getPokemonSpecies(name){
 const res = await pokeAPI.get(`pokemon-species/${name}`)
//  console.log(res.data);
 AppState.pokemonSpecies = res.data
 console.log(AppState.pokemonSpecies);
  }
}
export const pokemonService = new PokemonService();

import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { PokemonDetail } from "../models/PokemonDetail.js";
import { pokeAPI } from "./AxiosService.js";

class PokemonService {
  async getAllPokemon() {
    const res = await pokeAPI.get("pokemon", {
      params: {
        limit: 5,
      },
    });
    // console.log(res.data.results);
    let pokemons = res.data.results.map((p) => new Pokemon(p));

    // pokemons.forEach(async(poke) => {
    //   const pokes = await this.getPokemon(poke.id)
    // })
    for (const poke of pokemons) {
      const pokemon = await this.getPokemon(poke.id);
      // console.log(pokemon);
      AppState.pokemon.push(pokemon);
    }

  }
  async getPokemon(id) {
    const res = await pokeAPI.get(`pokemon/${id}`);
    console.log(res.data);
    return new PokemonDetail(res.data);
  }

  async getPokemonDetails(id) {
    const res = await pokeAPI.get(`pokemon/${id}`);
    console.log("[activePokemon]", res.data);
    //  console.log(AppState.activePokemon);
    AppState.activePokemon = new PokemonDetail(res.data);
    // console.log(AppState.activePokemon);
  }

  async searchByQuery(name){
    console.log(name);
    // AppState.pokemon = []
        const res = await pokeAPI.get(`pokemon/${name}`,{
          params:{
          }
        });
        console.log(res.data);
        AppState.activePokemon = new PokemonDetail(res.data)
        // console.log(AppState.activePokemon);
        // let pokemons = res.data.results.map((p) => new Pokemon(p));
// AppState.pokemon = new PokemonDetail(res.data)
        // for (const poke of pokemons) {
        //   const pokemon = await this.getPokemon(poke.id);
        //   AppState.pokemon.push(pokemon);
        // }
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
}
export const pokemonService = new PokemonService();

import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { PokemonDetail } from "../models/PokemonDetail.js";
import { router } from "../router.js";
import { api, pokeAPI } from "./AxiosService.js";

class PokemonService {
  async getAllPokemon() {
    const res = await api.get("api/pokemon/poke");
  
    AppState.pokemon= res.data.map((p) => new Pokemon(p));

   console.log(AppState.pokemon);

    // for (const poke of pokemons){
    //   const pokemon = await this.getPokemon(poke.id)
    //   // console.log(pokemon.types);
    // poke.types = pokemon.types
    // console.log(poke);
    // const sentPokemon = await api.post(`api/pokemon/poke`,poke)
    // console.log(sentPokemon.data);
    // }
  }
  async getPokemon(id) {
    const res = await pokeAPI.get(`pokemon/${id}`);
    // console.log(res.data);
    return new PokemonDetail(res.data);
  }

  async getPokemonNames(){
    // const res = await api.get('api/pokemon/poke')
    // console.log(res.data);
    // AppState.pokemon = res.data.map(p=> p)
    // console.log(AppState.pokemonName);
  }
  async getPokemonDetails(id) {
    const res = await pokeAPI.get(`pokemon/${id}`);
 
    AppState.activePokemon = new PokemonDetail(res.data);

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
 async getPokemonSpecies(id){
 const res = await pokeAPI.get(`pokemon-species/${id}`)
//  console.log(res.data);
 AppState.pokemonSpecies = res.data
 console.log(AppState.pokemonSpecies);
  }
 async getPokemonForms(id){
 const res = await pokeAPI.get(`pokemon-form/${id}`)
//  console.log(res.data);
 AppState.pokemonForms = res.data
 console.log(AppState.pokemonForms);
  }
 async getPokemonGrowthRate(id){
 const res = await pokeAPI.get(`growth-rate/${id}`)
//  console.log(res.data);
 AppState.pokemonGrowthRate = res.data
 console.log(AppState.pokemonGrowthRate);
  }
 async getPokemonEvolutions(id){
 const res = await pokeAPI.get(`evolution-chain/${id}`)
 console.log(res.data);
 AppState.pokemonEvolution = res.data
//  console.log(AppState.pokemonEvolution);
  }


}
export const pokemonService = new PokemonService();

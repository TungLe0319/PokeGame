import { pokeAPI } from "../services/AxiosService.js";
import { pokemonService } from "../services/PokemonService.js";

export class Pokemon {
  constructor(data) {
    this.id = data.url
      .replace("https://pokeapi.co/api/v2/pokemon/", "")
      .replace("/", "");
    this.name = data.name;
    this.url = data.url;
    // this.types = this.getPokemonDetails(this.id);
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  }
  // async getPokemonDetails(id) {
  //   const res = await pokeAPI.get(`pokemon/${id}`);
  //   // console.log(res.data.types);
  //   return res.data.types
    
  // }
}

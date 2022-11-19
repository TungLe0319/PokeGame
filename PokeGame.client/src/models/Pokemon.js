import { pokeAPI } from "../services/AxiosService.js";
import { pokemonService } from "../services/PokemonService.js";

export class Pokemon {
  constructor(data) {
    // this.id = data.url
    //   .replace("https://pokeapi.co/api/v2/pokemon/", "")
    //   .replace("/", "");
    // this.url = data.url;
    // this.types = this.getPokemonDetails(this.id);
    // this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
    this.id=data.id
    this.name = data.name;
    this.types=data.types;
     for (const type of this.types) {
       if (type.type.name == "dark") {
         type.color = "bg-darktype";
         type.bgColor = "bg-darktype";
       }
      
       if (type.type.name == "ice") {
         type.color = "bg-ice";
         type.bgColor = "bg-ice"
       }
      
       if (type.type.name == "steel") {
         type.color = "bg-steel";
         type.bgColor = "bg-steel"
       }
         if (type.type.name == "flying") {
           type.color = "bg-flying";
           type.bgColor = "bg-flying";
         }
     }
    this.img=data.img
  }
  
  // async getPokemonDetails(id) {
  //   const res = await pokeAPI.get(`pokemon/${id}`);
  //   // console.log(res.data.types);
  //   return res.data.types
    
  // }
}

import BaseController from "../utils/BaseController";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { pokemonService } from "../services/PokemonService";

export class PokemonController extends BaseController {
  constructor() {
    super("api/pokemon");
    this.router
    .get("", this.getPokemon)
     .get("/poke", this.getPokemonNames)
     .post('/poke',  this.addPokes)
  }

  async getPokemon(req, res, next) {
    try {
      return res.send();
    } catch (error) {
      next(error);
    }
  }
  async getPokemonNames(req, res, next) {
    try {
      //await
    } catch (error) {
      next(error);
    }
  }
  async addPokes(req, res, next){
   try{
     const pokes = await pokemonService.addPokes(req.body)
  res.send(pokes)
   }
   catch (error) {
   next(error)
   }
   }
}

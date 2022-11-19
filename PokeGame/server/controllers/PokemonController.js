import BaseController from "../utils/BaseController";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class PokemonController extends BaseController {
  constructor() {
    super("api/pokemon");
    this.router
    .get("", this.getPokemon)
     .get("", this.getPokemonNames);
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
}

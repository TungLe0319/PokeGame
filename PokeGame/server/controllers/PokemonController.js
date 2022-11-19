import BaseController from "../utils/BaseController";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class PokemonController extends BaseController {
  constructor() {
    super("api/pokemon");
    this.router
      .get("", this.getAll)

  }

  async getAll(req, res, next) {
    try {
      return res.send(["value1", "value2"]);
    } catch (error) {
      next(error);
    }
  }

}

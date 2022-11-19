import BaseController from "../utils/BaseController";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class PokemonController extends BaseController {
  constructor() {
    super("api/pokemon");
    this.router
      .get("", this.getAll)

      .post("", this.create);
  }

  async getAll(req, res, next) {
    try {
      return res.send(["value1", "value2"]);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}

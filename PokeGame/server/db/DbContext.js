import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { PokeSchema } from "../models/Poke";
import { ValueSchema } from "../models/Value";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  Pokes = mongoose.model("Poke", PokeSchema);

  Pokemons = mongoose.model("Pokemon", PokeSchema);
}

export const dbContext = new DbContext();

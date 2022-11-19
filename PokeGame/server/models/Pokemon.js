import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const PokemonSchema = new Schema(
  {
    pokeId: { type: String, required: true },
    name: { type: String, required: true },
    url: { type: String, required: true },
    img: { type: String, required: true },
    forms: [{type: String, required: true }],
    species: [{ type: String, required: true }],
    moves: [{ type: String, required: true }],
    evolutions: [{ type: String, required: true }],
    sprites: [{ type: String, required: true }],
    // STUB be to sure add whats appropriate
    creatorId: { type: ObjectId, ref: "Account", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);



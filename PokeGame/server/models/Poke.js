import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const PokeSchema = new Schema(
  {
    pokeId: { type: String, required: true },
    name: { type: String, required: true },
    url: { type: String, required: true },
    // STUB be to sure add whats appropriate
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

// TODO add this to dbContext

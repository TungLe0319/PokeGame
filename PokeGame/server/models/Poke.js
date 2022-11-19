import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const PokeSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    // url: { type: String, required: true },
    img:{type: String, required: true},
    types:[{type:Object}]
    // STUB be to sure add whats appropriate
  },
);

// TODO add this to dbContext

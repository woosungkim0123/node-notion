import Mongoose from "mongoose";
import { config } from "../config.js";

let db;

export async function connectDB() {
  return Mongoose.connect(config.db.host);
}

export function getTweets() {
  return db.collection("tweets");
}

export function useVirtualId(schema) {
  schema.virtual("id").get(function () {
    return this._id.toString();
  });
  schema.set("toJSON", { virtuals: true });

  schema.set("toObject", { virtuals: true });
}

import Mongoose from "mongoose";
import { config } from "../config.js";

let db;

export async function connectDB() {
  return Mongoose.connect(config.db.host);
}

export function getUsers() {
  return db.collection("users");
}

export function getTweets() {
  return db.collection("tweets");
}

//CONECCION CON LA BASE DE DATOS
import mongoose from "mongoose";
import dotenv from 'dotenv'; 

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Conectado a la DB");
});

export default db;
import express from 'express'
import cors from "cors";
import { mongoConnect } from './src/config/db.js';
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000
const app = express()

app.use(
    cors({
      origin: ["http://localhost:5173"],
      credentials: true,
      methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
      exposedHeaders: ["*", "Authorization"],
    })
  );

  console.log(PORT)

app.listen(PORT, () => {
    console.log(`Connected to port ${process.env.PORT}`)
    mongoConnect();
} )


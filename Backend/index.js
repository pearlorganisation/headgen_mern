import express from 'express'
import cors from "cors";
import { mongoConnect } from './src/config/db.js';
import dotenv from "dotenv";
import paymentsRouter from './src/routes/paymentsRoute.js';



dotenv.config();

const PORT = process.env.PORT || 8000
const app = express()

app.use(express.json());


app.use(
    cors({
      origin: ["http://localhost:5173"],
      credentials: true,
      methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
      exposedHeaders: ["*", "Authorization"],
    })
  );

// routes

app.use('/api/v1/payment', paymentsRouter)

app.listen(PORT, () => {
    console.log(`Connected to port ${process.env.PORT}`)
    mongoConnect();
} )


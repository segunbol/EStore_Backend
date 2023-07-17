import mongoose from "mongoose";
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import { errorMiddleware } from './middlewares/errorMiddleware';
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MongoDB connection URI is not defined in the environment variables.');
  process.exit(1); // Exit the process or handle the error accordingly
}


mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });

const app = express();

//Serves resources from public folder
app.use('/resources', express.static('src/public'));

app.use(errorMiddleware);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

// app.use('/')
// app.use('/', );
app.use('/api/v2/users', userRoutes);
app.listen(3000, ()=> { 
    console.log("Wa ti ma gbor") 
})



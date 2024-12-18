import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import db from "./config/database.js"

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';
import swagger from './config/swagger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT||8080;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello from Docker")

})
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);
swagger(app);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

export default app
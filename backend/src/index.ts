
import express, { Request, Response, json } from 'express';
import morgan from "morgan"
import dotenv from "dotenv"
import cors  from "cors"
import cookieParser from 'cookie-parser';

import apiRouter from "./routes/index"
import { connectDb } from './db/connect';


dotenv.config()
const app = express()
const corsOptions = {
	origin: [  "http://localhost:3000"],
	credentials: true
	
  }

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(json());
app.use(cookieParser())


connectDb()


app.get("/", (_ :Request ,res :Response)=>{
    res.send("hello world ")
})


app.use("/api", apiRouter)


const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})


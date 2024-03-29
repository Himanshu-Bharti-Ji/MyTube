import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))  // to accept json files
app.use(express.urlencoded({ extended: true, limit: "16kb" }))    // extended is for nested objects 
app.use(express.static("public"))   // files, folder for public access
app.use(cookieParser())     // to do CRUD operations on cookies in client's browser


// routes imports

import userRouter from "./routes/user.routes.js"

// routes declaration

app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register


export { app }
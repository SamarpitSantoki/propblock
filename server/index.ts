import express from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import routes from './router';
import cors from 'cors';
import helmet from 'helmet';
import multer from 'multer';
import mongoose from 'mongoose'
import dbConnect from './config/database'

const upload = multer ({dest: "uploads/"})
dotenv.config();

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "../build")));
console.log(path.join(__dirname, "../build"));
app.use("/api", routes);

dbConnect()

const PORT = process.env.PORT || 3000;

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));



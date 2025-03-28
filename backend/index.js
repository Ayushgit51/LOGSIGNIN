
import cors from 'cors';
import env from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import userRoute from './Middlewares/route.js';


const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));;
app.use(express.json());
env.config();

const PORT = process.env.PORT || 8080;
const URI = process.env.URI || "mongodb://localhost:27017/logsignin";

//connect to mongoDB


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  });

app.use("/user", userRoute);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
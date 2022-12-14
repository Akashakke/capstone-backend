import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import cors from "cors";
import UploadRoute from './Routes/UploadRoute.js'
// Routes

const app = express();

app.use(express.static('public'))
app.use('/images',express.static("images"))

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();


const CONNECTION =process.env.MONGO_DB;
mongoose
  .connect(CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
<<<<<<< HEAD
    app.listen(PORT, () =>
      console.log(`Server loaded at http://localhost:${PORT}`)
=======
    app.listen(process.env.PORT, () =>
      console.log('serve')
>>>>>>> c202feb6a5861b856a15a217390af5fa23b0a265
    )
  )
  .catch((error) => console.log(error));

// usage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use('/upload',UploadRoute)

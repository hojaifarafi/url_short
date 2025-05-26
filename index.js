import express from "express"
import path from "path"
const app = express();
import { router } from "./routes/router1.js";
import connectToMongoDB from "./connect.js"
import mongoose from "mongoose";
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/short_url");
  //.then(()=> {console.log("mongodb connected")})

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use("/static",express.static('static'))
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.json()); // For parsing application/json
app.use("/",router)

app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)})
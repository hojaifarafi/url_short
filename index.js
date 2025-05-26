import express from "express"
import path from "path"
const app = express();
import { router } from "./routes/router1.js";
// import {dotenv} from "dotenv"
//import connectToMongoDB from "./connect.js"
import mongoose from "mongoose";
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://poderalo71:86011572@claster0.av8coo8.mongodb.net/?retryWrites=true&w=majority&appName=claster0/test");
  //.then(()=> {console.log("mongodb connected")})

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use("/static",express.static('static'))
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.json()); // For parsing application/json
app.use("/",router)

app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)})
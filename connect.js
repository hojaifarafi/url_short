import mongoose from "mongoose";

async function connectToMongoDB(url){
    return mongoose.connect(url);
}
console.log(typeof(connectToMongoDB))
export default {connectToMongoDB}
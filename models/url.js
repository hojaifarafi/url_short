import mongoose from "mongoose"

const urlSchema = mongoose.Schema({
  shortId:{
    type:String,
    required: true,
    unique:true
  },
  redirectUrl:{
    type:String,
    required:true
  },
  visitHistory: [{timeStamp:{type: Number}}]
},{timeStamp:true})

export default  URL = mongoose.model("url",urlSchema)
console.log(typeof(URL))

// module.exports = URL
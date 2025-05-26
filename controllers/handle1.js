import URL from "../models/url.js"
import { short_id } from "./short.js"
async function handle1(req,res){
  const uid = req.params.id;
  //console.log(typeof(uid))
  const ids = await URL.findOne({"shortId":uid})
  //console.log(ids.redirectUrl)
  if(uid == null){
    res.render("home")
  }else if(ids == null){
    res.json({"status":"Link Not found"})
    //res.redirect("https://poderalo.rf.gd")
  }else{
    res.redirect(ids.redirectUrl)
  }
    
}
async function handle2(req,res){
  const ru = req.body
  await URL.create({
    shortId:short_id(8),
    redirectUrl: ru.url
  })
  console.log(URL,ru)
  res.redirect("/")
}
async function handle3(req,res) {
  const x = await URL.find()
  // res.render("home",{"urls":x})
  res.render("home",{"urls":x})
}
export {handle1,handle2,handle3}
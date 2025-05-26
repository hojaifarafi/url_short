import express from "express"
const router = express.Router();
import {handle1,handle2,handle3 } from "../controllers/handle1.js"


router.get("/",handle3)
router.get("/:id",handle1)
router.post("/form",handle2)
router.get("/xyz",(req,res)=>{
  res.statusCode(301).redirect("poderalo.rf.gd");
})

export {router}


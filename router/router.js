const express= require("express");
const control=require("../controleur/control")
const router= require("express").Router();

router.get("/",(req,res)=>{
    res.send("mohamed");
})
router.get("/memoire",control.getallmemoire)
router.post("/adduser",control.addmemoire)
router.delete("/supp",control.suppmemoire)
module.exports=router;
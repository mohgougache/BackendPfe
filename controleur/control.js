const memoire = require("../models/memoire");
class MemoireController{
   static async getallmemoire(req,res){
    var results = await  memoire.getmemoire;
    if(results){
        res.send(results);
    }
   }
   static async addmemoire(req,res){
    var x=await memoire.addmemoir(req.body.titre,req.body.auteure);
    if(x==true){
        res.send("seuccessfully")
    }else {
        res.send("error");
    }
   }
   static async suppmemoire(req,res){
            
           var x= await memoire.delltmemoire(req.body.id);
           if(x==true){
            res.send("seuccessfully")
        }else {
            res.send("error");
        }
   }
}
module.exports=MemoireController;
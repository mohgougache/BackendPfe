const db=require("../cofing/db");
class MemoirModele{


static async getmemoire()
{
 return new Promise(resolve =>{
    db.query("SELECT * FROM livres" ,[],(error,result)=>{
        if(!error){
            resolve(result)
        }
        if(error){
            console.log(error);
        }
    })
 })
}
static async addmemoir(titre,auteure){
return new Promise(resolve=>{
    db.query("INSERT INTO livres(titre,auteur) VALUES (?,?)",[titre,auteure],(error,result)=>{
        if(!error){
            resolve(true);
        }
        if(error){
            resolve(false);
        }

    })
})
}
static async delltmemoire(id){
   return new Promise(resolve=>{
    db.query("DELETE FROM livres WHERE id=?",[id],(error,result)=>{
        if(!error){
           resolve(true)
        } else 
        resolve(false);
    })
   })
}
}
module.exports=MemoirModele;
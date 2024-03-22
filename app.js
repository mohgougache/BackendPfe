const express= require("express");
const mydb=require("./cofing/db");
const bodyParser = require("body-parser");
const app = express();
const rout=require("./router/router");
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(rout);
// app.post("/postext",(req, res)=>{
//     var data= req.body.text;
//     console.log(data);
// })
app.listen(3001,()=>{
    console.log("serveur preet");
});
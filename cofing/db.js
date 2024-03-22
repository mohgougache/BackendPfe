const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bibliotheque'
});
connection.connect((err)=>{
    if(err){
        console.error("error"+err.stack)
        return;
    }
    console.log("conect bien");
})

// db.getConnection(()=>{
//     console.log('connection succesfully')
// })
module.exports=connection;
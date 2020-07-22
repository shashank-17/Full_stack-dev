const sql = require('../models/db.js');

const Logins = function(logins){
    this.username = logins.username;
    this.email = logins.email;
    this.mobilenumber = logins.mobilenumber;
    this.address=logins.address;
    this.password=logins.password;
};

Logins.create = (newLogins,result) => {
    sql.query('insert into login set ?',newLogins,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created login : ",{id:res.insertedId,...newLogins});
        return (null,{id:res.insertedId,...newLogins});
    })
};

 


module.exports = Logins;
const sql = require('../models/db.js');

const Nurse = function(nurse){
    this.username = nurse.username;
    this.emailid = nurse.emailid;
    this.mobilenumber = nurse.mobilenumber;
    this.password1=nurse.password1;
    this.address=nurse.address;
};

Nurse.create = (newNurse,result) => {
    sql.query('insert into nurses set ?',newNurse,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created Nurse : ",{id:res.insertedId,...newNurse});
        return (null,{id:res.insertedId,...newNurse});
    })
};

 


module.exports = Nurse;
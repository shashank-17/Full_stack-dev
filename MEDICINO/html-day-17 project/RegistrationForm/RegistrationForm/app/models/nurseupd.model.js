const sql = require('../models/db.js');

const Nurseupd = function(nurseupd){
    this.name = nurseupd.name;
    this.feedback = nurseupd.feedback;
};

Nurseupd.create = (newNurseupd,result) => {
    sql.query('insert into nurseupd set ?',newNurseupd,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created nurseupd : ",{id:res.insertedId,...newNurseupd});
        return (null,{id:res.insertedId,...newNurseupd});
    })
};

 


module.exports = Nurseupd;
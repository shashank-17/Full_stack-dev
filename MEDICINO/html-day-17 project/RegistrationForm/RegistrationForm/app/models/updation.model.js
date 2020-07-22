const sql = require('../models/db.js');

const Updation = function(updation){
    this.name = updation.name;
    this.feedback = updation.feedback;
};

Updation.create = (newupdation,result) => {
    sql.query('insert into updation set ?',newupdation,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created updation : ",{id:res.insertedId,...newupdation});
        return (null,{id:res.insertedId,...newupdation});
    })
};

 


module.exports = Updation;
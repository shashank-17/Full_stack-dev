const sql = require('../models/db.js');

const Attendanced = function(attendanced){
    this.name = attendanced.name;
    this.feedback = attendanced.feedback;
};

Attendanced.create = (newAttendanced,result) => {
    sql.query('insert into attendance set ?',newAttendanced,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created attendance : ",{id:res.insertedId,...newAttendanced});
        return (null,{id:res.insertedId,...newAttendanced});
    })
};

 


module.exports = Attendanced;
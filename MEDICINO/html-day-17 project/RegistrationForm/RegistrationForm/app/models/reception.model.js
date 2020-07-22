const sql = require('../models/db.js');

const Reception = function(reception){
    this.username = reception.username;
    this.emailid = reception.emailid;
    this.mobilenumber = reception.mobilenumber;
    this.password1=reception.password1;
    this.address=reception.address;
};

Reception.create = (newReception,result) => {
    sql.query('insert into reception set ?',newReception,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created receptionist : ",{id:res.insertedId,...newReception});
        return (null,{id:res.insertedId,...newReception});
    })
};

module.exports = Reception;
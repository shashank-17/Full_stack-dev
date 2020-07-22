const sql = require('../models/db.js');

const Patient = function(patient){
    this.username = patient.username;
    this.emailid = patient.emailid;
    this.mobilenumber = patient.mobilenumber;
    this.password1=patient.password1;
    this.address=patient.address;
};

Patient.create = (newPatient,result) => {
    sql.query('insert into patient set ?',newPatient,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created patient : ",{id:res.insertedId,...newPatient});
        return (null,{id:res.insertedId,...newPatient});
    })
};

module.exports = Patient;
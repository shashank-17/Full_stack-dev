const sql = require('../models/db.js');

const Register = function(register){
    this.username = register.username;
    this.emailid = register.emailid;
    this.mobilenumber = register.mobilenumber;
    this.password1=register.password1;
    this.address=register.address;
};

Register.create = (newRegister,result) => {
    sql.query('insert into registers set ?',newRegister,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created Register : ",{id:res.insertedId,...newRegister});
        return (null,{id:res.insertedId,...newRegister});
    })
};

module.exports = Register;
const sql = require('../models/db.js');

const Appointment = function(appointment){
    this.name = appointment.name;
    this.email = appointment.email;
    this.mobilenumber = appointment.mobilenumber;
    this.address=appointment.address;
};

Appointment.create = (newAppointment,result) => {
    sql.query('insert into appointment set ?',newAppointment,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created appointment : ",{id:res.insertedId,...newAppointment});
        return (null,{id:res.insertedId,...newAppointment});
    })
};

module.exports = Appointment;
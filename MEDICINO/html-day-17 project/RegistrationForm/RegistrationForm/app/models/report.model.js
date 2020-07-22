const sql = require('../models/db.js');

const Reports = function(reports){
    this.patientname = reports.patientname;
    this.mobilenumber = reports.mobilenumber;
    this.address=reports.address;
    this.status = reports.status;

};

Reports.create = (newReports,result) => {
    sql.query('insert into Reports set ?',newReports,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created Report : ",{id:res.insertedId,...newReports});
        return (null,{id:res.insertedId,...newReports});
    })
};

module.exports = Reports;
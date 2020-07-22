const sql = require('../models/db.js');

const Admin = function (admin) {
    this.username = admin.username;
    this.emailid = admin.emailid;
    this.mobilenumber = admin.mobilenumber;
    this.password1 = admin.password1;
    this.address = admin.address;
};

Admin.create = (newadmin, result) => {
    sql.query(`insert into admin set ?`, newadmin, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log("Created admin : ", { id: res.insertedId, ...newadmin });
        return (null, { id: res.insertedId, ...newadmin });
    })
};
module.exports = Admin;
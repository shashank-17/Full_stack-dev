const Admin = require("../models/admin.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const admin = new Admin({
        username:req.body.username,
        emailid: req.body.emailid,
        mobilenumber: req.body.mobilenumber,
        password1: req.body.password1,
        address:req.body.address,
    });

    Admin.create(admin, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the admin."
            });
        else res.send(data);
    });
};
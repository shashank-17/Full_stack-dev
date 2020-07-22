const Logins = require("../models/login.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const logins = new Logins({
        username:req.body.username,
        email: req.body.email,
        mobilenumber: req.body.mobilenumber,
        address:req.body.address,
        password: req.body.password,
    });

    Logins.create(logins, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the login."
            });
        else res.send(data);
    });
};
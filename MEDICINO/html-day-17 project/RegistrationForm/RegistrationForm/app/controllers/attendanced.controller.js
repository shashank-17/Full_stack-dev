const Attendanced = require("../models/attendanced.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const attendanced = new Attendanced({
        name:req.body.name,
        feedback: req.body.feedback,
    });

    Attendanced.create(attendanced, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the attendance."
            });
        else res.send(data);
    });
};
const Updation = require("../models/updation.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const updation = new Updation({
        name:req.body.name,
        feedback: req.body.feedback,
    });

    Updation.create(updation, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the updation."
            });
        else res.send(data);
    });
};
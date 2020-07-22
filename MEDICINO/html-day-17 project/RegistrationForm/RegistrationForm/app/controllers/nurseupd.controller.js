const Nurseupd = require("../models/nurseupd.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const nurseupd = new Nurseupd({
        name:req.body.name,
        feedback: req.body.feedback,
    });

    Nurseupd.create(nurseupd, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the nurseupd."
            });
        else res.send(data);
    });
};
const Appointment = require("../models/appointment.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const appointment = new Appointment({
    name:req.body.name,
    email: req.body.email,
    mobilenumber: req.body.mobilenumber,
    address:req.body.address,
  });

  Appointment.create(appointment, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Appointment."
      });
    else res.send(data);
  });
};

const Reception = require("../models/reception.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const reception = new Reception({
    username:req.body.username,
    emailid: req.body.emailid,
    mobilenumber: req.body.mobilenumber,
    password1: req.body.password1,
    address:req.body.address,
  });

  Reception.create(reception, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the reception."
      });
    else res.send(data);
  });
};

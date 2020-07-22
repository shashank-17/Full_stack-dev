const Register = require("../models/register.model.js");

// Create and Save a new Register
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Register
  const register = new Register({
    username:req.body.username,
    emailid: req.body.emailid,
    mobilenumber: req.body.mobilenumber,
    password1: req.body.password1,
    address:req.body.address,
  });

  // Save Register in the database
  Register.create(register, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Register."
      });
    else res.send(data);
  });
};

 
 
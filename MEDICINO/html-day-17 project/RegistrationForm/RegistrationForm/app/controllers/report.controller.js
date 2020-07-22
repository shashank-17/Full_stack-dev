const Reports = require("../models/report.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const reports = new Reports({
    patientname:req.body.patientname,
    mobilenumber: req.body.mobilenumber,
    address:req.body.address,
    status:req.body.status,
  });

  Reports.create(reports, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Reports."
      });
    else res.send(data);
  });
};

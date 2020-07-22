module.exports = app =>{
    const patients = require('../controllers/patient.controller.js');

    
    app.post ("/patient",patients.create);
    
}
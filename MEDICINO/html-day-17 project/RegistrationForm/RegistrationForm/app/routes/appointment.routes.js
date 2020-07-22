module.exports = app =>{
    const appointment = require('../controllers/appointment.controller.js');

    
    app.post ("/appointment",appointment.create);
    
}
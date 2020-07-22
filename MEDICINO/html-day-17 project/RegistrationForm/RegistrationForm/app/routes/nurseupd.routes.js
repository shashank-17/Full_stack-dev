module.exports = app =>{
    const nurseupd = require('../controllers/nurseupd.controller.js');

    app.post ("/nurseupd",nurseupd.create);
    
}
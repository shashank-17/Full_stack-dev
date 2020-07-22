module.exports = app =>{
    const reception = require('../controllers/reception.controller.js');

    
    app.post ("/reception",reception.create);
    
}
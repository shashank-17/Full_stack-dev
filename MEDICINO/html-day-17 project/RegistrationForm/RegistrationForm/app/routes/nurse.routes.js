module.exports = app =>{
    const nurses = require('../controllers/nurse.controller.js');

    
    app.post ("/nurses",nurses.create);
    
}
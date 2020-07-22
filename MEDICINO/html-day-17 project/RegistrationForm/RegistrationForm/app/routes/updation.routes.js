module.exports = app =>{
    const updation = require('../controllers/updation.controller.js');

    
    app.post ("/updation",updation.create);
    
}
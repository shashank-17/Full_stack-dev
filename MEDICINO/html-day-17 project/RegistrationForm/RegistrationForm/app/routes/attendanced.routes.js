module.exports = app =>{
    const attendenced = require('../controllers/attendanced.controller.js');

    
    app.post ("/attendence",attendenced.create);
    
}
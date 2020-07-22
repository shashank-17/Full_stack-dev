module.exports = app =>{
    const register = require('../controllers/register.controller.js');

    //create a new register
    app.post ("/register",register.create);
    
}
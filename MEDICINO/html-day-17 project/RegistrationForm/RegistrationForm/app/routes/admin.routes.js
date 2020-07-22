module.exports = app =>{
    const admins = require('../controllers/admin.controller.js');

    
    app.post ("/admins",admins.create);
    
}
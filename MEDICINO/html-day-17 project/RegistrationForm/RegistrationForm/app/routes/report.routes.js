module.exports = app =>{
    const reports = require('../controllers/report.controller.js');

    app.post ("/reports",reports.create);
    
}
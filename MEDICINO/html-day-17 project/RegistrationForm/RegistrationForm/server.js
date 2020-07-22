const express = require('express');
const bodyparser = require('body-parser');

const app = express();
//Content-type : application/json
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({message:'Registration Form'});
});

require('./app/routes/register.routes.js')(app);
require('./app/routes/reception.routes.js')(app);
require('./app/routes/nurse.routes.js')(app);
require('./app/routes/patient.routes.js')(app);
require('./app/routes/admin.routes.js')(app);
require('./app/routes/report.routes.js')(app);
require('./app/routes/login.routes.js')(app);
require('./app/routes/attendanced.routes.js')(app);
require('./app/routes/appointment.routes.js')(app);
require('./app/routes/updation.routes.js')(app);
require('./app/routes/nurseupd.routes.js')(app);

app.listen(3002,()=>{
    console.log('Server is Running on port 3002');
});
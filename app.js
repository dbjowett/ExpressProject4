const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 5000;

//Set templating engine 
app.set('view engine', 'ejs');
app.set('views', 'views');

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));

//Import Routes
const adminRoutes = require('./routes/admin.js');
const userRoutes = require('./routes/users.js');

//Middleware
app.use('/', adminRoutes.router);
app.use('/', userRoutes);

//404
app.use((req, res, next) => {
    res.status(404).send('<h1>404: Page Not Found!</h1>');
});

//Port Listening
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});
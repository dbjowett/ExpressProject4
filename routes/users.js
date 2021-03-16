const express = require('express');
const router = express.Router();
const nameData = require('./admin');

router.get('/', (req, res)=>{
    //Users = Names array from Admin.js
    const users = nameData.names;
    res.render('users',{ 
        names: users 
    });
});

module.exports = router;
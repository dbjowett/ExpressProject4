const express = require('express');
const router = express.Router();

const names = [];

router.get('/admin', (req,res)=>{
    res.render('admin');
});

router.post('/admin',(req, res)=>{
    names.push({ names: req.body.name} );
    res.redirect('/');
});

exports.router = router;
exports.names = names; 

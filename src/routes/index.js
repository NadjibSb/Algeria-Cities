const router = require('express').Router();
const wilayaCtrl = require('../app/wilayas/wilayaController');

router.get("/hello", function(req,res){
    res.json("The server lestens to :" );
});

router.get('/reset',function(req,res){
    try{
        wilayaCtrl.reset();
        console.log("Database reset : sucessesfull");
        res.send("Database reset : sucessesfull");
    }catch{
        console.log("reset database Error");
        res.send("reset database Error");
    }
    
});

module.exports = router;
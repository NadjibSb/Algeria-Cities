const router = require('express').Router();

router.get("/hello", function(req,res){
    res.json("The server lestens to :" );
});

module.exports = router;
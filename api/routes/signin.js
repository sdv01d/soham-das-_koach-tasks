const express = require('express');
const router = express.Router();

router.post('/', function(req, res){
    res.send({
        email: req.body.email
    });
});

module.exports = router;
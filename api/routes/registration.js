const express = require('express');
const router = express.Router();

router.post('/', function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const mobileNo = req.body.mob;

    res.send({
        email: req.body.email,
        password: req.body.password
    });
});

module.exports = router;
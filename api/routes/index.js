const express = require('express');
const router = express.Router();

//separate routes

router.use("/signin",require('./signin'));
router.use("/registration",require('./registration'));

//export
module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/',function (req, res, next) {
    // res.render("index-nodejs.html");
    res.render("index.html");
})

module.exports = router;
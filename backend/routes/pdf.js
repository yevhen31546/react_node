var express = require('express');
var router = express.Router();
const fs = require("fs");
// Pdf route that will serve pdf
router.get("/", (req, res) => {
    // console.log('path..', "." + req.query.path)
    var file = fs.createReadStream("." + req.query.path);
    file.pipe(res);
});

module.exports = router;

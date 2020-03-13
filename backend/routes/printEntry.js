var express = require('express');
var router = express.Router();
const pdf = require('html-pdf');
var path = require('path');

const dirPath = path.join(__dirname, '../documents/entry/');

const pdfTemplate = require('./../documents')
// POST - PDF genreation and fetching of the data
router.post("/", (req, res) => {
    // console.log('pdf create..', req.body)
    let filename = `${req.body.id}.pdf`;
    let filepath= dirPath + filename;
    pdf.create(pdfTemplate(req.body), {}).toFile(filepath, (err) => {
        // console.log(err)
        if(err) {
            res.send(Promise.reject());
        }
        
        res.send(Promise.resolve());
        // res.json({"filename": filename});
    })
});

// GET - Send the generated PDF to the client
router.get('/', (req, res) => {
    let filename = req.query.filename;
    // res.sendFile(`${dirPath}/${filename}`)
    res.download(`${dirPath}/${filename}`)
});

module.exports = router;

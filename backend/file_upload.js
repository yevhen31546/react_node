var multer = require('multer');
var uuid = require('uuid/v4');

// File uploading
const DIR = './public/upload/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuid() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage
});

module.exports = upload;

// import modal
var Warranty = require('../models/warrantyModel.js');

// Get all Warranty
exports.list_all_warranty = function(req, res) {
    Warranty.getAllWarranty(function(err, Warranty) {
        if (err)
            res.send(err);
        res.json(Warranty);
    });
};

// Register Warranty
exports.create_a_warranty = function(req, res) {
    // console.log('request body..', req.body)
    Warranty.createWarranty(new Warranty(req.body), function(err, Warranty) {
        if (err)
            res.send(err);
        res.json(Warranty);
    });
};

// Update Warranty
exports.update_a_warranty = function(req, res) {
    // console.log(req.params.warrantyId)
    Warranty.updateById(req.params.warrantyId, new Warranty(req.body), function(err, Warranty) {
        if (err)
            res.send(err);
        // res.json(Warranty);
        res.json(Warranty);
    });
};

// Delete Warranty
exports.delete_a_warranty = function(req, res) {
    Warranty.remove(req.params.WarrantyId, function(err, Warranty) {
        if (err)
            res.send(err);
        res.json({ message: 'Warranty successfully deleted', status: 200 });
    });
};
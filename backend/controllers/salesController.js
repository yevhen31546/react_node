// import modal
var Sale = require('../models/salesModel.js');

// Get all Sales
exports.list_all_sales = function(req, res) {
    Sale.getAllSales(function(err, sales) {
        if (err)
            res.send(err);
        res.json(sales);
    });
};

// Register Sale
exports.create_a_sale = function(req, res) {
    const url = req.protocol + '://' + req.get('host');
    const invoice_path = url + '/public/upload/' + req.file.filename;
    req.body = {...req.body, invoice: invoice_path}
    Sale.createSale(new Sale(req.body), function(err, sales) {
        if (err)
            res.send(err);
        res.json(sales);
    });
};

// Update Sale
exports.update_a_sale = function(req, res) {
    if (req.file) {
        const url = req.protocol + '://' + req.get('host');
        const invoice_path = url + '/public/upload/' + req.file.filename;
        req.body = {...req.body, invoice: invoice_path}
    }
    Sale.updateById(req.params.saleId, new Sale(req.body), function(err, sales) {
        if (err)
            res.send(err);
        // res.json(sales);
        res.json(req.body);
    });
};

// Delete Sale
exports.delete_a_sale = function(req, res) {
    Sale.remove(req.params.saleId, function(err, sale) {
        if (err)
            res.send(err);
        res.json({ message: 'Sale successfully deleted' });
    });
};
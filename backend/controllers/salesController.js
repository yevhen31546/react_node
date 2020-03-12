var Sale = require('../models/salesModel.js');

exports.list_all_sales = function(req, res) {
    Sale.getAllSales(function(err, sales) {
        if (err)
            res.send(err);
        res.json(sales);
    });
};


exports.create_a_sale = function(req, res) {
    const url = req.protocol + '://' + req.get('host');
    const invoice_path = url + '/public/upload/' + req.file.filename;
    req.body = {...req.body, invoice: invoice_path}
    // console.log(req.body);
    var new_sale = new Sale(req.body);
    Sale.createSale(new_sale, function(err, sales) {
        if (err)
            res.send(err);
        res.json(sales);
    });
};


exports.update_a_sale = function(req, res) {
    // var {saleId} = req.params
    // console.log('saleId',req.params.saleId)
    // console.log('req.body', req.body)
    // sale = new Sale(req.body)
    // console.log(sale)

    // res.json(req.params.saleId)
    // res.json(req.body)
    Sale.updateById(req.params.saleId, new Sale(req.body), function(err, sales) {
        if (err)
            res.send(err);
        res.json(sales);
    });
};


exports.delete_a_sale = function(req, res) {

    Sale.remove(req.params.saleId, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Sale successfully deleted' });
    });
};
var Sale = require('../models/salesModel.js');

exports.list_all_sales = function(req, res) {
    Sale.getAllSales(function(err, sales) {
        if (err)
            res.send(err);
        res.json(sales);
    });
};


exports.create_a_sale = function(req, res) {
    var new_sale = new Sale(req.body);

    Sale.createSale(new_sale, function(err, sales) {

        if (err)
            res.send(err);
        res.json(sales);
    });
};


exports.update_a_sale = function(req, res) {
    Sale.updateById(req.params.saleId, new Task(req.body), function(err, sales) {
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
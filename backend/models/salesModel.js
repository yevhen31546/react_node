// import mysql db connection
var sql = require('./db.js');

//Sales object constructor
var Sale = function(sale) {
    this.model = sale.model;
    this.sn = sale.sn;
    this.buyer = sale.buyer;
    this.date = sale.s_date;
    this.invoice = sale.invoice;
};

// Create Sale
Sale.createSale = function(newSale, result) {
    sql.query("INSERT INTO sales set ?", newSale, function(err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res.insertId);
        }
    });
};

// Get all Sales list
Sale.getAllSales = function(result) {
    sql.query("SELECT * FROM sales ORDER BY id desc", function(err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

// Update Sale
Sale.updateById = function(id, sales, result) {
    sql.query("UPDATE sales SET model = ?, sn = ?, buyer = ?, date = ?  WHERE id = ?",
            [sales.model, sales.sn, sales.buyer, sales.date, id], 
            function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
    });
};

// Remove Sale
Sale.remove = function(id, result) {
    sql.query("DELETE FROM sales WHERE id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Sale;

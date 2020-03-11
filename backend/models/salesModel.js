var sql = require('./db.js');

//Sales object constructor
var Sale = {}

Sale.createSale = function(newSale, result) {
    sql.query("INSERT INTO sales set ?", newSale, function(err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Sale.getAllSales = function(result) {
    console.log('model...')
    sql.query("SELECT * FROM sales ORDER BY id desc", function(err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('sales : ', res);

            result(null, res);
        }
    });
};
Sale.updateById = function(id, task, result) {
    sql.query("UPDATE sales SET sales = ? WHERE id = ?", [sales.sales, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
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
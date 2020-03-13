// import mysql db connection
var sql = require('./db.js');

//Warranty object constructor
var Warranty = function(Warranty) {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes(); 

    this.model = Warranty.model;
    this.sn = Warranty.sn;
    this.war_req_des = Warranty.war_req_des;
    this.war_type = Warranty.war_type;
    this.buyer = Warranty.buyer;
    this.contact_info = Warranty.contact_info;
    this.rec_date = Warranty.rec_date;
    this.rec_user = Warranty.rec_user;
    this.ret_date = Warranty.ret_date;
    this.war_res_des = Warranty.war_res_des;
    this.service_code = Warranty.service_code;
    this.price = Warranty.price;
    this.invoice_flag = Warranty.invoice_flag ==='on'? 1: 0;
    this.invoice_sent = Warranty.invoice_sent ==='on'? 1: 0;;
    this.deliv_date = Warranty.deliv_date;
    this.updated_at = date + "-" + month + "-" + year + " " + hours + ":" + minutes
};

// Create Warranty
Warranty.createWarranty = function(newWarranty, result) {
    sql.query("INSERT INTO warranty set ?", newWarranty, function(err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res.insertId);
        }
    });
};

// Get all Warranty list
Warranty.getAllWarranty = function(result) {
    sql.query("SELECT * FROM warranty ORDER BY id desc", function(err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

// Update Warranty
Warranty.updateById = function(id, Warranty, result) {
    sql.query("UPDATE warranty \
                SET model = ?, sn = ?, war_req_des = ?, war_type = ?, buyer = ?, \
                    contact_info = ?, rec_date = ?, rec_user = ?, ret_date = ?, \
                    war_res_des = ?, service_code = ?, price = ?, invoice_flag = ?, \
                    invoice_sent = ?, deliv_date = ?, updated_at = ? \
                    WHERE id = ?",
                    [Warranty.model, Warranty.sn, Warranty.war_req_des, Warranty.war_type,
                    Warranty.buyer, Warranty.contact_info, Warranty.rec_date, Warranty.rec_user,
                    Warranty.ret_date, Warranty.war_res_des, Warranty.service_code, Warranty.price,
                    Warranty.invoice_flag, Warranty.invoice_sent, Warranty.deliv_date, Warranty.updated_at, id], 
            function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
    });
};

// Remove Warranty
Warranty.remove = function(id, result) {
    sql.query("DELETE FROM warranty WHERE id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Warranty;

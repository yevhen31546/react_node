var express = require('express');
var router = express.Router();
var salesController = require('../controllers/salesController');
var upload = require('../file_upload');

// sales routes
router.get('/', salesController.list_all_sales);

router.post('/', upload.single('invoice'), salesController.create_a_sale);

router.put('/:saleId', salesController.update_a_sale);

router.delete('/delete/:saleId', salesController.delete_a_sale);

module.exports = router;
var express = require('express');
var router = express.Router();
var salesController = require('../controllers/salesController');

// sales routes
router.get('/', salesController.list_all_sales);

router.post('/', salesController.create_a_sale);

router.put('/:saleId', salesController.update_a_sale);

router.delete('/:saleId', salesController.delete_a_sale);

module.exports = router;
var express = require('express');
var router = express.Router();
var warrantyController = require('../controllers/warrantyController');

/* warranty routes */

// Get warranty list
router.get('/', warrantyController.list_all_warranty);

// Register warranty
router.post('/', warrantyController.create_a_warranty);

// Update warranty
router.put('/:warrantyId', warrantyController.update_a_warranty);

// Delete warranty
router.delete('/delete/:warrantyId', warrantyController.delete_a_warranty);

module.exports = router;

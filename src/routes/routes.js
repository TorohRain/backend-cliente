const express = require('express');
const ClienteController = require ('../controllers/ClienteController.js');
const router = express.Router();
 
router.post('C:\\Users\\User\\backend-cliente\\index.js', ClienteController.Insert);
router.get('/cliente', ClienteController.SelectAll);
router.get('/cliente/:id', ClienteController.SelectDetail);

module.exports = router;
const express = require('express');
const router = express.Router();

//const model = require('../models/employes.model')();
var salariesController = require('../controllers/salaries.controller');

router.get('/', salariesController.show);

router.post('/add', salariesController.save);

router.get('/select/:id', salariesController.edit);

router.get('/delete/:id', salariesController.delete);

module.exports = router;
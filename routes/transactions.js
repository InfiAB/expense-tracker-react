const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deletetTransactions } = require('../controllers/transactions');

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

router 
    .route('/:id')
    .delete(deletetTransactions);

module.exports = router;


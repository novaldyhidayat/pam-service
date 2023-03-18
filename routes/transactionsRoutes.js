const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {addTransaction, getAllTransactions, getTransactionById, updateTransaction, deleteTransaction} = require('../controllers/transactionsController');

// GET /schema
router.get('/', authMiddleware, getAllTransactions);

// GET /schema
router.get('/:id', authMiddleware, getTransactionById);

// POST /schema
router.post('/', authMiddleware, addTransaction);

// PUT /schema/:id
router.put('/:id', authMiddleware, updateTransaction);

// DELETE /schema/:id
router.delete('/:id', authMiddleware, deleteTransaction);

module.exports = router;

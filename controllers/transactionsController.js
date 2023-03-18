const Transaction = require('../models/transactions');

// Get all transactions
const getAllTransactions = async (req, res) => {
      try {
            const transactions = await Transaction.find();
            res.json(transactions);
      } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
      }
};

// Get transaction by ID
const getTransactionById = async (req, res) => {
      const {id} = req.params;
      try {
            const transaction = await Transaction.findById(id);
            if (!transaction) {
                  res.status(404).json({error: 'Transaction not found'});
            } else {
                  res.json(transaction);
            }
      } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
      }
};

// Add a new transaction
const addTransaction = async (req, res) => {
      const {month, clientID, year, checkedBy, date, usage, totalPrice, totalPaid, differences, paidOff, customerID, period} = req.body;
      try {
            const transaction = new Transaction({
                  month,
                  clientID,
                  year,
                  checkedBy,
                  date,
                  usage,
                  totalPrice,
                  totalPaid,
                  differences,
                  paidOff,
                  customerID,
                  period
            });
            await transaction.save();
            res.json(transaction);
      } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
      }
};

// Update a transaction
const updateTransaction = async (req, res) => {
      const {id} = req.params;
      const {month, clientID, year, checkedBy, date, usage, totalPrice, totalPaid, differences, paidOff, customerID, period} = req.body;
      try {
            const transaction = await Transaction.findByIdAndUpdate(
                  id,
                  {
                        month,
                        clientID,
                        year,
                        checkedBy,
                        date,
                        usage,
                        totalPrice,
                        totalPaid,
                        differences,
                        paidOff,
                        customerID,
                        period
                  },
                  {new: true}
            );
            if (!transaction) {
                  res.status(404).json({error: 'Transaction not found'});
            } else {
                  res.json(transaction);
            }
      } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
      }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
      const {id} = req.params;
      try {
            const transaction = await Transaction.findByIdAndDelete(id);
            if (!transaction) {
                  res.status(404).json({error: 'Transaction not found'});
            } else {
                  res.json({message: 'Transaction deleted successfully'});
            }
      } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
      }
};

module.exports = {
      getAllTransactions,
      getTransactionById,
      addTransaction,
      updateTransaction,
      deleteTransaction
};

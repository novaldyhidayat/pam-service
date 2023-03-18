const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
      month: {type: String, required: true},
      clientID: {type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true},
      year: {type: String, required: true},
      checkedBy: {type: String},
      date: {type: Date, required: true, default: Date.now},
      usage: {type: Number, required: true},
      totalPrice: {type: Number, required: true},
      totalPaid: {type: Number, default: 0},
      differences: {type: Number, default: 0},
      paidOff: {type: Boolean, default: false},
      customerID: [{type: String}],
      period: {type: String, required: true}
});

const transactions = mongoose.model('Transaction', transactionSchema);

module.exports = transactions;

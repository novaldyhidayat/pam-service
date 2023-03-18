const mongoose = require('mongoose');

const schemaSchema = new mongoose.Schema({
      month: {type: String, required: true},
      year: {type: String, required: true},
      createdBy: {type: String, required: true},
      updatedBy: {type: String, default: ''},
      zero: {type: Number, required: true},
      abonement: {type: Number, required: true},
      toTwenty: {type: Number, required: true},
      toThirty: {type: Number, required: true},
      toFortyFive: {type: Number, required: true},
      toSixty: {type: Number, required: true},
      toOneHundred: {type: Number, required: true},
      toOneHundredFifty: {type: Number, required: true},
      isActive: {type: Boolean, default: false}
});

module.exports = mongoose.model('Schema', schemaSchema);

const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema(
      {
            name: {type: String, required: true},
            phone: {type: String, required: true},
            address: {type: String, required: true},
            customerID: {type: String, required: true, unique: true},
            active: {type: Boolean, required: true, default: true},
            rt: {type: String, required: true},
            rw: {type: String, required: true}
      },
      {timestamps: true}
);

const Clients = mongoose.model('Clients', clientSchema);

module.exports = Clients;

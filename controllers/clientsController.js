const Clients = require('../models/clients');

// Create new client
const createClient = async (req, res) => {
      try {
            const client = new Clients(req.body);
            await client.save();
            res.status(201).json(client);
      } catch (err) {
            res.status(500).json({error: err.message});
      }
};

// Get all clients
const getClients = async (req, res) => {
      try {
            const clients = await Clients.find();
            res.json(clients);
      } catch (err) {
            res.status(500).json({error: err.message});
      }
};

// Get a single client by ID
const getClientById = async (req, res) => {
      try {
            const client = await Clients.findById(req.params.id);
            if (client) {
                  res.json(client);
            } else {
                  res.status(404).json({error: 'clients not found'});
            }
      } catch (err) {
            res.status(500).json({error: err.message});
      }
};

// Update a client by ID
const updateClientById = async (req, res) => {
      try {
            const client = await Clients.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if (client) {
                  res.json(client);
            } else {
                  res.status(404).json({error: 'clients not found'});
            }
      } catch (err) {
            res.status(500).json({error: err.message});
      }
};

// Delete a client by ID
const deleteClientById = async (req, res) => {
      try {
            const client = await Clients.findByIdAndDelete(req.params.id);
            if (client) {
                  res.json(client);
            } else {
                  res.status(404).json({error: 'clients not found'});
            }
      } catch (err) {
            res.status(500).json({error: err.message});
      }
};

// Find clients by name containing
const findClientsByName = async (req, res) => {
      const {name} = req.params;
      try {
            const clients = await Clients.find({name: {$regex: name, $options: 'i'}});
            res.json(clients);
      } catch (err) {
            console.error(err.message);
            res.status(500).json({error: 'Internal server error'});
      }
};

module.exports = {
      createClient,
      getClients,
      getClientById,
      updateClientById,
      deleteClientById,
      findClientsByName
};

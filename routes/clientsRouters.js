const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {getClients, getClientById, createClient, updateClientById, deleteClientById, findClientsByName} = require('../controllers/clientsController');

// GET all clients
router.get('/', authMiddleware, getClients);

// GET client by ID
router.get('/:id', authMiddleware, getClientById);

// POST new client
router.post('/', authMiddleware, createClient);

// PUT update client by ID
router.put('/:id', authMiddleware, updateClientById);

// DELETE client by ID
router.delete('/:id', authMiddleware, deleteClientById);

// GET clients by name containing
router.get('/search/:name', authMiddleware, findClientsByName);

module.exports = router;

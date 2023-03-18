const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {createSchema, getAllSchemas, getSchemaById, toggleSchemaIsActive, updateSchemaById, deleteSchema} = require('../controllers/schemaController');

// GET /schema
router.get('/', authMiddleware, getAllSchemas);

// GET /schema
router.get('/:id', authMiddleware, getSchemaById);

// POST /schema
router.post('/', authMiddleware, createSchema);

// PUT /schema/:id
router.put('/:id', authMiddleware, updateSchemaById);

// PUT /schema/toggle/:id
router.put('/toggle/:id', authMiddleware, toggleSchemaIsActive);

// DELETE /schema/:id
router.delete('/:id', authMiddleware, deleteSchema);

module.exports = router;

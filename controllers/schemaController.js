const Schema = require('../models/schema');

// Create new schema
const createSchema = async (req, res) => {
      const {month, year, createdBy, updatedBy, zero, abonement, toTwenty, toThirty, toFortyFive, toSixty, toOneHundred, toOneHundredFifty, isActive} = req.body;
      try {
            const schema = new Schema({
                  month,
                  year,
                  createdBy,
                  updatedBy,
                  zero,
                  abonement,
                  toTwenty,
                  toThirty,
                  toFortyFive,
                  toSixty,
                  toOneHundred,
                  toOneHundredFifty,
                  isActive
            });
            await schema.save();
            res.status(201).json(schema);
      } catch (err) {
            console.error(err.message);
            res.status(500).json({error: 'Server error'});
      }
};

// Get all schemas
const getAllSchemas = async (req, res) => {
      try {
            const schemas = await Schema.find();
            res.json(schemas);
      } catch (err) {
            console.error(err.message);
            res.status(500).json({error: 'Server error'});
      }
};

// Get a single schema by ID
const getSchemaById = async (req, res) => {
      try {
            const schema = await Schema.findById(req.params.id);
            if (!schema) {
                  return res.status(404).json({error: 'Schema not found'});
            }
            res.json(schema);
      } catch (err) {
            console.error(err.message);
            if (err.kind === 'ObjectId') {
                  return res.status(404).json({error: 'Schema not found'});
            }
            res.status(500).json({error: 'Server error'});
      }
};

// Update schema by ID
const updateSchemaById = async (req, res) => {
      const {month, year, createdBy, updatedBy, zero, abonement, toTwenty, toThirty, toFortyFive, toSixty, toOneHundred, toOneHundredFifty, isActive} = req.body;
      try {
            let schema = await Schema.findById(req.params.id);
            if (!schema) {
                  return res.status(404).json({error: 'Schema not found'});
            }
            schema.month = month;
            schema.year = year;
            schema.createdBy = createdBy;
            schema.updatedBy = updatedBy;
            schema.zero = zero;
            schema.abonement = abonement;
            schema.toTwenty = toTwenty;
            schema.toThirty = toThirty;
            schema.toFortyFive = toFortyFive;
            schema.toSixty = toSixty;
            schema.toOneHundred = toOneHundred;
            schema.toOneHundredFifty = toOneHundredFifty;
            schema.isActive = isActive;
            await schema.save();
            res.json(schema);
      } catch (err) {
            console.error(err.message);
            if (err.kind === 'ObjectId') {
                  return res.status(404).json({error: 'Schema not found'});
            }
            res.status(500).json({error: 'Server error'});
      }
};

const deleteSchema = async (req, res) => {
      try {
            const client = await Schema.findByIdAndDelete(req.params.id);
            if (client) {
                  res.json(client);
            } else {
                  res.status(404).json({error: 'Schema not found'});
            }
      } catch (err) {
            res.status(500).json({error: err.message});
      }
};

const toggleSchemaIsActive = async (req, res) => {
      try {
            const schema = await Schema.findById(req.params.id);
            if (!schema) {
                  return res.status(404).json({error: 'Schema not found'});
            }
            schema.isActive = !schema.isActive;
            await schema.save();
            res.json(schema);
      } catch (err) {
            console.error(err.message);
            res.status(500).json({error: 'Internal server error'});
      }
};

module.exports = {createSchema, getAllSchemas, getSchemaById, updateSchemaById, toggleSchemaIsActive, deleteSchema};

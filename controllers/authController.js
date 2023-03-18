const jwt = require('jsonwebtoken');
const User = require('../models/user');
const comparePassword = require('../models/user');
// Define secret for JWT
const secret = 'R$=bN[[Wd~&z"y7';

// Register user
const register = async (req, res) => {
      const {name, email, adminName, isActive, password, role} = req.body;
      try {
            const user = new User({name, email, adminName, isActive, password, role});
            await user.save();
            const token = jwt.sign({userId: user.id}, secret);
            res.json({user});
      } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
      }
};

// Login user
const login = async (req, res) => {
      const {name, password} = req.body;
      try {
            const user = await User.findOne({name});
            console.log({name});
            if (!user) {
                  res.status(401).json({error: 'Unauthorized'});
            } else {
                  const isMatch = await comparePassword({password});
                  if (!isMatch) {
                        res.status(401).json({error: 'Unauthorized'});
                  } else {
                        const token = jwt.sign({userId: user.id}, secret);
                        res.json({token});
                  }
            }
      } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
      }
};

// Aktif Nonaktif
const toggleIsActive = async (req, res) => {
      const {id} = req.params;
      try {
            const user = await User.findById(id);
            if (!user) {
                  res.status(404).json({error: 'User not found'});
            } else {
                  user.isActive = !user.isActive;
                  await user.save();
                  res.json(user);
            }
      } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
      }
};

module.exports = {register, login, toggleIsActive};

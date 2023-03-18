const User = require('../models/user');

// GET /users
exports.getUsers = async (req, res) => {
      try {
            const users = await User.find({});
            res.status(200).json(users);
      } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
      }
};

// POST /users
exports.createUser = async (req, res) => {
      const {name, email, adminName, isActive, password, role} = req.body;
      try {
            let user = new User({name, email, adminName, isActive, password, role});
            await user.save();
            res.status(201).json(user);
      } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
      }
};

// PUT /users/:id
exports.updateUser = async (req, res) => {
      const {name, email, adminName, isActive, password, role} = req.body;
      try {
            let user = await User.findById(req.params.id);
            if (!user) {
                  return res.status(404).json({msg: 'User not found'});
            }

            user.name = name || user.name;
            user.email = email || user.email;
            user.adminName = adminName || user.adminName;
            user.isActive = isActive || user.isActive;
            user.password = password || user.password;
            user.role = role || user.role;

            await user.save();
            res.status(200).json(user);
      } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
      }
};

// DELETE /users/:id
exports.deleteUser = async (req, res) => {
      try {
            let user = await User.findById(req.params.id);
            if (!user) {
                  return res.status(404).json({msg: 'User not found'});
            }

            await user.remove();
            res.status(200).json({msg: 'User removed'});
      } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
      }
};

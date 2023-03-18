const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
      name: {type: String, required: true},
      email: {type: String, required: true, unique: true},
      adminName: {type: String, required: true},
      isActive: {type: Boolean, required: true, default: true},
      password: {type: String, required: true},
      role: {type: String, enum: ['superadmin', 'admin', 'officer'], default: 'officer'}
});

// Hash password before saving to database
userSchema.pre('save', async function (next) {
      const user = this;
      if (user.isModified('password')) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(user.password, salt);
            user.password = hash;
      }
      next();
});

// Compare password with hashed password in database
userSchema.methods.comparePassword = async function (password) {
      const user = this;
      return bcrypt.compare(password, user.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;

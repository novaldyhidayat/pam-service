const jwt = require('jsonwebtoken');
const config = require('../config/db');
const secret = 'R$=bN[[Wd~&z"y7';
module.exports = (req, res, next) => {
      // ambil token dari header
      const token = req.header('Authorization').replace('Bearer ', '');

      if (!token) {
            return res.status(401).json({message: 'Authentication failed'});
      }

      try {
            // verifikasi token
            const decoded = jwt.verify(token, secret);

            // tambahkan objek user ke request
            req.user = decoded;

            next();
      } catch (error) {
            console.log(error);
            res.status(401).json({message: 'Authentication failed'});
      }
};

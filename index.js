const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// enable cors
app.use(cors());

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// connect to database
const connectDB = require('./config/db');
connectDB();

// set up routes
console.log('Starting Service at ' + port);
const authRoutes = require('./routes/authRoutes');
console.log('Auth Routes Clear ');
const userRoutes = require('./routes/userRoutes');
console.log('User Routes Clear ');
const schemaRoutes = require('./routes/schemaRoutes');
console.log('Schema Routes Clear ');
const clientRoutes = require('./routes/clientsRouters');
console.log('Clients Routes Clear ');
const transactionsRoutes = require('./routes/transactionsRoutes');
console.log('Transaction Routes Clear ');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/schema', schemaRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/transactions', transactionsRoutes);

// error handling middleware
app.use(function (err, req, res, next) {
      if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            return res.status(400).json({message: 'Bad JSON'});
      }
      next();
});

app.listen(port, () => {
      console.log(`Server running on port ${port}`);
});

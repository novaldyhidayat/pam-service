const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://nvldydb:UMGZpgjdiEX80HPt@cluster0.rmaah.gcp.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
      try {
            console.log(MONGODB_URI);
            await mongoose.connect(MONGODB_URI, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true
            });
            console.log('MongoDB connected...');
      } catch (err) {
            console.error(err.message);
            process.exit(1);
      }
};

module.exports = connectDB;

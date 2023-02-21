const mongoose = require('mongoose');
require('dotenv').config();

function dbConnection() {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

  mongoose.connection.on('connected', () => {
    console.log('Connection successful');
  });

  mongoose.connection.on('error', (error) => {
    console.log(error);
    console.log('An error occured');
  });
}

module.exports = { dbConnection };

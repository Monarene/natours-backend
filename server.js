const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
console.log(DB);

mongoose.connect();
// console.log(process.env.NODE_ENV);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on Port ${port}`);
});

// shell connection string mongo "mongodb+srv://cluster0.zzmg1.mongodb.net/<dbname>" --username monarene

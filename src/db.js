
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// Using custom env variable names to avoid direct copy
const DB_HOST = process.env.SAST_DB_HOST || process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.SAST_DB_PORT || process.env.DB_PORT || 3306;
const DB_USER = process.env.SAST_DB_USER || process.env.DB_USER || 'root';
const DB_PASS = process.env.SAST_DB_PASS || process.env.DB_PASS || '';
const DB_NAME = process.env.SAST_DB_NAME || process.env.DB_NAME || 'sast_p2_db';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  dialectOptions: {
    // adjust as necessary
  },
  logging: false,
});

module.exports = sequelize;

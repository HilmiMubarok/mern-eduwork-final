const mongoose = require('mongoose');
const { dbHost, dbPass, dbName, dbPort, dbUser } = require('../app/config');
const url = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;

mongoose.connect(url);

const db = mongoose.connection;

module.exports = db;

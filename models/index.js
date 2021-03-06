
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};
const config = require('../config/config');
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.pasword,
  config.db.options
);

// eslint-disable-next-line 
fs.readdirSync(__dirname).filter((file) => file !== 'index.js').
forEach((file) => {
  // eslint-disable-next-line no-undef
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
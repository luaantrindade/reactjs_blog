// backend/db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./blogDB.db', (err) => {
  if (err) {
    console.error('Could not open database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

module.exports = db;
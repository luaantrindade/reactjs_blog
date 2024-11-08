// backend/articleModel.js
const db = require('./db');

// Create the articles table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP
  )`
);

// Save an article
const saveArticle = (title, content, callback) => {
  db.run(
    'INSERT INTO articles (title, content) VALUES (?, ?)',
    [title, content],
    function (err) {
      if (err) return callback(err);
      callback(null, { id: this.lastID, title, content });
    }
  );
};

// Get all articles
const getArticles = (callback) => {
  db.all('SELECT * FROM articles', [], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
};

module.exports = { saveArticle, getArticles };

const mysql = require('mysql2/promise');

let pool = null;

function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'portfolio',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  return pool;
}

async function initDatabase() {
  const db = getPool();

  await db.execute(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log('Database initialized successfully');
  return db;
}

async function saveContact({ name, email, message }) {
  const db = getPool();
  const [result] = await db.execute(
    'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
    [name || '', email, message]
  );
  return result.insertId;
}

async function getAllContacts() {
  const db = getPool();
  const [rows] = await db.execute('SELECT * FROM contacts ORDER BY created_at DESC');
  return rows;
}

module.exports = {
  getPool,
  initDatabase,
  saveContact,
  getAllContacts
};

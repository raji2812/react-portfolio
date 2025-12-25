require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { initDatabase, saveContact, getAllContacts } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  try {
    // Save to MySQL database
    const contactId = await saveContact({ name, email, message });
    console.log('Contact saved to database with ID:', contactId);

    return res.json({
      ok: true,
      message: 'Thank you for your message!'
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    return res.status(500).json({ error: 'Failed to save your message. Please try again.' });
  }
});

// Endpoint to get all contacts (for admin purposes)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

const port = process.env.PORT || 5000;

// Initialize database and start server
initDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Contact server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  });

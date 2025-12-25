# Contact Server

Backend server for the portfolio contact form. Stores submissions in MySQL and sends email notifications via Gmail SMTP.

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server (v5.7 or higher)

## Database Setup

1. Install MySQL if not already installed
2. Create the database:

```sql
CREATE DATABASE portfolio;
```

The `contacts` table will be created automatically when the server starts.

## Configuration

1. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

2. Update the `.env` file with your credentials:

### Database Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `DB_HOST` | MySQL server host | `localhost` |
| `DB_PORT` | MySQL server port | `3306` |
| `DB_USER` | MySQL username | `root` |
| `DB_PASSWORD` | MySQL password | (empty) |
| `DB_NAME` | Database name | `portfolio` |

### Gmail SMTP Configuration

To use Gmail for sending emails:

1. Enable 2-Step Verification on your Google account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an App Password for "Mail"
4. Use that App Password in `SMTP_PASS` (not your regular Gmail password)

| Variable | Description | Default |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_SECURE` | Use SSL/TLS | `false` |
| `SMTP_USER` | Your Gmail address | (required) |
| `SMTP_PASS` | Gmail App Password | (required) |
| `OWNER_EMAIL` | Email to receive notifications | `SMTP_USER` |
| `FROM_EMAIL` | Sender email address | `SMTP_USER` |

### Other Settings

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `DISABLE_EMAIL` | Set to `true` to skip emails | `false` |

## Installation

```bash
cd server
npm install
```

## Running the Server

Development (with auto-reload):
```bash
npm run dev
```

Production:
```bash
npm start
```

## API Endpoints

### POST /api/contact

Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I would like to get in touch."
}
```

**Response:**
```json
{
  "ok": true,
  "message": "Thank you for your message! I will get back to you soon.",
  "emailSent": true
}
```

### GET /api/contacts

Retrieve all contact submissions (for admin purposes).

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!",
    "created_at": "2025-12-23T10:30:00.000Z"
  }
]
```

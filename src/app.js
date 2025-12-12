
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./db');
const usersRouter = require('./routes/users');
const setupSwagger = require('./swagger');

const app = express();
app.use(bodyParser.json());

// Basic root
app.get('/', (req, res) => res.json({ message: 'SAST P2 - API (edited)' }));

// Users CRUD
app.use('/api/v1/users', usersRouter);

// Swagger
setupSwagger(app);

// Health check
app.get('/health', (req, res) => res.sendStatus(200));

const PORT = process.env.SAST_APP_PORT || process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    // Sync only in development/testing; in production use migrations.
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start app:', err);
    process.exit(1);
  }
}

if (require.main === module) {
  start();
}

module.exports = app;

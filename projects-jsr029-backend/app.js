const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// MongoDB Configuration
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.error('Connexion à MongoDB échouée !', err));

const app = express();

// Middleware
app.use(cors());
// Redundant CORS headers are handled by the cors() middleware, 
// but kept for specific legacy compatibility if required.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

// Controllers
const sendEmail = require('./mail');

// Routes
app.post('/api/contact', sendEmail);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/user'));
app.use('/api/projects', require('./routes/project'));

module.exports = app;
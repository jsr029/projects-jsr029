const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/user'));
app.use('/api/projects', require('./routes/project'));

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

connectDB().then(startServer).catch(err => console.log(err));

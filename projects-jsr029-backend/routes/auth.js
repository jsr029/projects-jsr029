const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, password, role } = req.body;
    try {
        if (await User.findOne({ email })) {
            return res.status(400).json({ msg: 'Utilisateur existe déjà' });
        }

        const user = new User({ email, password, role });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const token = jwt.sign(
            { user: { id: user.id, role: user.role } },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({ token, user: { id: user.id, role: user.role } });
    } catch (err) {
        res.status(500).json({ msg: 'Erreur serveur' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ msg: 'Identifiants incorrects' });
        }

        const token = jwt.sign(
            { user: { id: user.id, role: user.role } },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({ token, user: { id: user.id, role: user.role } });
    } catch (err) {
        res.status(500).json({ msg: 'Erreur serveur' });
    }
});

module.exports = router;
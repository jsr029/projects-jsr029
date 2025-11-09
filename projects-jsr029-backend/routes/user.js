// routes/user.js
const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = express.Router();

// GET tous les utilisateurs (sans mot de passe)
router.get('/', auth, auth.isSuperAdmin, async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        console.error('Erreur GET /api/users:', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Créer un utilisateur (superAdmin)
router.post('/', auth, auth.isSuperAdmin, async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).json({ msg: 'Email déjà utilisé' });
        }

        const user = new User({ email, password, role });
        const salt = await require('bcryptjs').genSalt(10);
        user.password = await require('bcryptjs').hash(password, salt);

        await user.save();
        const safeUser = await User.findById(user._id).select('-password');
        res.status(201).json(safeUser);
    } catch (err) {
        console.error('Erreur POST /api/users:', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Modifier un utilisateur
router.put('/:id', auth, auth.isSuperAdmin, async (req, res) => {
    try {
        const updates = req.body;
        if (updates.password) {
            const salt = await require('bcryptjs').genSalt(10);
            updates.password = await require('bcryptjs').hash(updates.password, salt);
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true }
        ).select('-password');

        if (!user) return res.status(404).json({ msg: 'Utilisateur non trouvé' });
        res.json(user);
    } catch (err) {
        console.error('Erreur PUT /api/users/:id:', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Supprimer un utilisateur
router.delete('/:id', auth, auth.isSuperAdmin, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ msg: 'Utilisateur non trouvé' });
        res.json({ msg: 'Utilisateur supprimé' });
    } catch (err) {
        console.error('Erreur DELETE /api/users/:id:', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

module.exports = router;
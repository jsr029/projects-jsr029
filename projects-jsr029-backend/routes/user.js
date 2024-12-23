const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, auth.isSuperAdmin, async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/', auth, auth.isSuperAdmin, async (req, res) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.json(user);
});

router.put('/:id', auth, auth.isSuperAdmin, async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});

router.delete('/:id', auth, auth.isSuperAdmin, async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: 'User deleted' });
});

module.exports = router;

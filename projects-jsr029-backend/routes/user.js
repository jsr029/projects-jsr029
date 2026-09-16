const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = express.Router();

// Helper to wrap async routes and catch errors to prevent server crashes
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

router.get('/', auth, auth.isSuperAdmin, asyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(users);
}));

router.post('/', auth, auth.isSuperAdmin, asyncHandler(async (req, res) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(201).json(user);
}));

router.put('/:id', auth, auth.isSuperAdmin, asyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
        return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
}));

router.delete('/:id', auth, auth.isSuperAdmin, asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        return res.status(404).json({ msg: 'User not found' });
    }
    res.json({ msg: 'User deleted' });
}));

module.exports = router;
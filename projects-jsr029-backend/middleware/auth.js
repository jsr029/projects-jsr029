const jwt = require('jsonwebtoken');
const User = require('../models/user');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function(req, res, next) {
    let token = req.headers["authorization"];
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length).trimLeft();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        console.error('Token verification error:', err);
        res.status(401).json({ msg: 'Token is not valid', error: err.message });
    }
};

module.exports.isSuperAdmin = function(req, res, next) {
    if (req.user.role !== 'superAdmin') {
        return res.status(403).json({ msg: 'You do not have the required permission' });
    }
    next();
};

module.exports.isAdmin = function(req, res, next) {
    if (req.user.role !== 'admin' && req.user.role !== 'superAdmin') {
        return res.status(403).json({ msg: 'You do not have the required permission' });
    }
    next();
};

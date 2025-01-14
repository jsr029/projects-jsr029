const jwt = require('jsonwebtoken');
const User = require('../models/user');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function(req, res, next) {
    let token = req.headers["x-access-token"];
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
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

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

/**
 * Middleware to verify JWT token and attach user payload to request
 */
const auth = function(req, res, next) {
    let token = req.headers["authorization"];
    
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Handle 'Bearer <token>' format
    if (token.startsWith('Bearer ')) {
        token = token.slice(7).trim();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Ensure the decoded payload contains the user object
        req.user = decoded.user;
        next();
    } catch (err) {
        console.error('Token verification error:', err.message);
        res.status(401).json({ msg: 'Token is not valid', error: err.message });
    }
};

/**
 * Middleware to restrict access to Super Admins only
 */
auth.isSuperAdmin = function(req, res, next) {
    if (!req.user || req.user.role !== 'superAdmin') {
        return res.status(403).json({ msg: 'You do not have the required permission' });
    }
    next();
};

/**
 * Middleware to restrict access to Admins and Super Admins
 */
auth.isAdmin = function(req, res, next) {
    if (!req.user || (req.user.role !== 'admin' && req.user.role !== 'superAdmin')) {
        return res.status(403).json({ msg: 'You do not have the required permission' });
    }
    next();
};

module.exports = auth;
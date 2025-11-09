const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function(req, res, next) {
    let token = req.headers["authorization"];
    if (!token) return res.status(401).json({ msg: 'No token' });

    if (token.startsWith('Bearer ')) {
        token = token.slice(7).trimStart();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token invalide' });
    }
};

module.exports.isSuperAdmin = (req, res, next) => {
    if (req.user.role !== 'superAdmin') {
        return res.status(403).json({ msg: 'Accès refusé' });
    }
    next();
};

module.exports.isAdmin = (req, res, next) => {
    if (!['admin', 'superAdmin'].includes(req.user.role)) {
        return res.status(403).json({ msg: 'Accès refusé' });
    }
    next();
};
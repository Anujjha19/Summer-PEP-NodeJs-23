const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, 'secret-key', (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        req.userId = decodedToken.userId;
        next();
    });
};

module.exports = { verifyToken };

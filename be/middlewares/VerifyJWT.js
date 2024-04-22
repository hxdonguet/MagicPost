const jwt = require('jsonwebtoken')
require('dotenv').config()

function VerifyJWT(req, res, next) {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        console.log('Không có Auth token');
        return res.sendStatus(401);
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        // Invalid Access token means having no access to API (Forbidden)
        if (err) {
            console.log('Auth Token Error');
            return res.sendStatus(403);
        }
        console.log(decoded.user.workPlace)
        req.username = decoded.user.username;
        req.role = decoded.user.role;
        req.id = decoded.user.id;   
        req.workPlace = decoded.user.workPlace,
        req.locationId = decoded.user.locationId
        next();
    });
}

module.exports = VerifyJWT
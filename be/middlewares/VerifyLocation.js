const Location = require('../models/Location')


const VerifyLocation = (allowedLocation) => {
    return async (req, res, next) => {
        // console.log(req.currentLocationId)
        console.log(req.locationId)
        if(!req?.locationId) return res.sendStatus(401);
        const location = await Location.findById(req.locationId);
        const isPermitted = allowedLocation == location.type;
        // If not permitted, user have no right to access API resources - Forbidden
        if (!isPermitted) return res.sendStatus(403);
        next();
    }
}
module.exports = VerifyLocation
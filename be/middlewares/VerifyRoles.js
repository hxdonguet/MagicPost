const VerifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.role;
        console.log(req.username)
        console.log(req.role)
        // console.log(req.role)
        if(!req?.role) return res.sendStatus(401);
        const isPermitted = allowedRoles.includes(userRole);
        // If not permitted, user have no right to access API resources - Forbidden
        if (!isPermitted) return res.sendStatus(403);
        next();
    }
}
module.exports = VerifyRoles
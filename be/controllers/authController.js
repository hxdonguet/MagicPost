
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')



//login
// POST /auth/login
const login = async (req, res) => {
    let user = await User.findOne({ username: req.body.username }).exec()
    if (!user) {
        return res.status(400).json({ errors: "non-existent" })
    }
    const pwdCompare = await bcrypt.compare(req.body.password, user.password)
    if (!pwdCompare) {
        return res.status(400).json({ errors: "incorrect password" })
    }
    const data = {
        "user": {
            "id": user.id,
            "username": user.username,
            "password":user.password,
            "role": user.role,
            "email": user.email,
            "phoneNumber" : user.phoneNumber,
            "name":user.name,
            "workPlace":user?.workPlace,
            "locationId": user?.locationId
        }
    }
    console.log(process.env.ACCESS_TOKEN_SECRET)
    // console.log(user)
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '10m'
    });
    const refreshToken = jwt.sign(
        { "username": user.username },
        process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d'
    });
    // create cookie with refreshToken
    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        sameSite: 'None',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
    })
    return res.status(200).json({ success: true, accessToken });
}

// refresh 
// GET /auth/refresh
const refresh = (req, res) => {
    const cookies = req.cookies;
    if (cookies?.jwt) return res.status(401);
    const refreshToken = cookies.jwt;

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
        if (err) return res.status(403);
        const user = await User.findOne({ username: decoded.username })
        if (!user) return res.status(401)
        const accessToken = jwt.sign(
            {
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "password":user.password,
                    "role": user.role,
                    "email": user.email,
                    "phoneNumber" : user.phoneNumber,
                    "name":user.name,
                    "workPlace":user?.workPlace,
                    "locationId": user?.locationId
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '10m' }
        )
        res.json({ accessToken })
    })
}


// logOut
// POST /auth/logOut
const logOut = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);
    res.clearCookie('jwt', {
        httpOnly: true,
        sameSite: 'None',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
    })
    res.json("Clear Cookie")
}

module.exports = {
    login,
    logOut,
    refresh
}
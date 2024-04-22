const express = require('express')
const router = express.Router()
const {login, logOut, refresh} = require('../controllers/authController')

// router.post("/register", );

router.post('/login', login)

router.get("/refresh", refresh )

router.post("/logout", logOut )

module.exports = router

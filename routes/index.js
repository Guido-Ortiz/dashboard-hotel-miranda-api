var express = require('express');
var router = express.Router();
// const passport = require('passport')
const passport = require('passport');
const sessionPassport = passport.authenticate('jwt', { session: false })

// IMPORTO LOS ROUTERS
const bookings = require('./bookings')
const rooms = require('./rooms')
const users = require('./users')
const contacts = require('./contacts')
const login = require('./login');

// CONFIGURO LOS ROUTERS
// router.use('/bookings', bookings)
router.use('/login', login)
router.use('/bookings', sessionPassport, bookings)
router.use('/rooms', rooms)
router.use('/users', users)
router.use('/contacts', contacts)


module.exports = router;

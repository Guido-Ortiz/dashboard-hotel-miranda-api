var express = require('express');
var router = express.Router();

// IMPORTO LOS ROUTERS
const bookings = require('./bookings')
const rooms = require('./rooms')
const users = require('./users')
const contacts = require('./contacts')

// const booking = require('./booking')

// CONFIGURO LOS ROUTERS
router.use('/bookings', bookings)
router.use('/rooms', rooms)
router.use('/users', users)
router.use('/contacts', contacts)

module.exports = router;

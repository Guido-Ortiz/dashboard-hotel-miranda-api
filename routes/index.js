var express = require('express');
var router = express.Router();


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// IMPORTO LOS ROUTERS
// const users = require('./users')
const bookings = require('./bookings')
const rooms = require('./rooms')
const contacts = require('./contacts')

const booking = require('./booking')

// CONFIGURO LOS ROUTERS
// router.use('/users', users)
router.use('/bookings', bookings)
router.use('/rooms', rooms)
router.use('/contacts', contacts)
// router.use('/bookings/:id', booking)

module.exports = router;

var express = require('express');
var router = express.Router();


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// IMPORTO LOS ROUTERS
// const users = require('./users')
const bookings = require('./bookings')

// CONFIGURO LOS ROUTERS
// router.use('/users', users)
router.use('/bookings', bookings)

module.exports = router;

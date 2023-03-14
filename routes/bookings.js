var express = require('express');
var router = express.Router();
const booking_controller = require('../controllers/bookingsControllers')

// BOOKING ROUTES
router.get('/', booking_controller.bookings_list)
router.get("/:id", booking_controller.booking_detail)
router.post('/', booking_controller.booking_post)
router.delete('/:id', booking_controller.booking_delete)

module.exports = router;
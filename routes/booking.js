const { Router } = require("express");
const { deleteBooking } = require("../controllers/deleteBooking");

const router = Router();

router.delete('/bookings/:id', deleteBooking)

module.exports = router;
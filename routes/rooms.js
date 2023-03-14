var express = require('express');
var router = express.Router();
const room_controller = require('../controllers/roomsController')

// ROOMS ROUTES
router.get('/', room_controller.rooms_list)
router.get("/:id", room_controller.room_detail)

module.exports = router;
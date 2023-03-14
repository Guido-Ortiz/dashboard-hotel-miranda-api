var express = require('express');
var router = express.Router();
const users_controller = require('../controllers/usersControllers')

// USERS ROUTES
router.get('/', users_controller.users_list)
router.get("/:id", users_controller.user_detail)

module.exports = router;

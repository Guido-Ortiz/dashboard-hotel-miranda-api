var express = require('express');
var router = express.Router();
const users_controller = require('../controllers/usersControllers')

// USERS ROUTES
router.get('/', users_controller.users_list)
router.get("/:id", users_controller.user_detail)
router.post('/', users_controller.user_post)
router.delete('/:id', users_controller.user_delete)

module.exports = router;

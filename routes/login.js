var express = require('express');
var router = express.Router();
const login_controller = require('../controllers/loginController.js');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');


router.post('/', login_controller.login_post)

module.exports = router;

// module.exports = router;
var express = require('express')
var router = express.Router()
const login_controller = require('../controllers/loginController.js')

router.post('/', login_controller.login_post)

module.exports = router
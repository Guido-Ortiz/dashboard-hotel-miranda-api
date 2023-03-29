var express = require('express')
var router = express.Router()
const public_controller = require('../controllers/publicController')

router.get('/', public_controller.public_message)

module.exports = router
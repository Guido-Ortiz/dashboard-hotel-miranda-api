var express = require('express');
var router = express.Router();
const contact_controller = require('../controllers/contactsController')

// CONTACTS ROUTES
router.get('/', contact_controller.contacts_list)
router.get("/:id", contact_controller.contacts_detail)

module.exports = router;
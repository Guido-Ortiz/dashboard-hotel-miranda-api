var express = require('express');
var router = express.Router();
const contact_controller = require('../controllers/contactsController')

// CONTACTS ROUTES
router.get('/', contact_controller.contacts_list)
router.get("/:id", contact_controller.contact_detail)
router.post('/', contact_controller.contact_post)
router.delete('/:id', contact_controller.contact_delete)
router.put('/:id', contact_controller.contact_edit)

module.exports = router;
const { Router } = require("express");
const { getContacts } = require("../controllers/getContacts");

const router = Router();

router.get('/', getContacts)

module.exports = router;
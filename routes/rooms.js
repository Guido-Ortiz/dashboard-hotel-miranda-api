const { Router } = require("express");
const { getRooms } = require("../controllers/getRooms");

const router = Router();

router.get('/', getRooms)


module.exports = router;
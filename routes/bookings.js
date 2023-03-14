// const axios = require("axios");
const { Router } = require("express");
const { getBookings } = require("../controllers/getBookings");

const router = Router();

// router.get('/', async (req, res) => {

//     try {
//         console.log('HOLA')
//     } catch (e) {
//         console.log(e)
//     }
// })
router.get('/', getBookings)

module.exports = router;
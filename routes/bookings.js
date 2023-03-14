const { Router } = require("express");
const { deleteBooking } = require("../controllers/deleteBooking");
const { getBookings } = require("../controllers/getBookings");

const router = Router();

router.get('/', getBookings)
router.delete('/:id', deleteBooking)

module.exports = router;

// router.get('/', async (req, res) => {

//     try {
//         console.log('HOLA')
//     } catch (e) {
//         console.log(e)
//     }
// })

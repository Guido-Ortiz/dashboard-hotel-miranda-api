const { faker } = require('@faker-js/faker');
const { connect, disconnect } = require('./db/connection');
const hashPassword = require('./helpers/hashPassword');
const Booking = require('./schemas/booking');
const Review = require('./schemas/review');
const Room = require('./schemas/room');
const User = require('./schemas/user');

async function run() {
    await connect()

    // await insertCustomers(10)
    // await insertUsers(10)
    // await insertReviews(10)
    // await insertRooms(10)
    // await Room.deleteMany()
    // await insertBookings(10)
    // await insertAmenities(3)

    await disconnect()
}

run()

// users
const randomUser = async () => {

    const descriptions = ['Receptionist', 'Tourist Information', 'Kitchen', 'Cleaning', 'Security']

    const password = faker.internet.password()

    return await new User({
        username: faker.name.fullName(),
        photo: faker.image.avatar(),
        email: faker.internet.email(),
        start: faker.date.between("2022-01-01", "2022-12-12"),
        description: faker.helpers.arrayElement(descriptions),
        phone: faker.phone.number("+## ## ### ## ##"),
        userstatus: faker.helpers.arrayElement(['Active', 'Inactive']),
        password: await hashPassword(password)
    })
}

const insertUsers = async (users) => {
    for (let i = 0; i < users; i++) {
        const user = await randomUser()
        await User.create(user)
    }
}

// reviews
const randomReview = async () => {
    // const idCustomers = await dbQuery('SELECT id_customer FROM miranda.customers;', null)
    // const ids = idCustomers.map(e => e.id_customer);
    return await new Review({
        name: faker.name.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number("+## ## ### ## ##"),
        date: faker.date.between("2022-01-01", "2022-12-12"),
        comment: faker.lorem.paragraphs(),
        archived: faker.helpers.arrayElement(['0', '1']),
    })
}

const insertReviews = async (rev) => {
    for (let i = 0; i < rev; i++) {
        const review = await randomReview()
        await Review.create(review)
    }
}

// ROOM
const randomRoom = async () => {
    const amenities = ['WiFi', 'AC', 'Parking', 'TV', 'Fridge', 'Coffee Maker', 'Hair Dryer']
    const photos = [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1525905708812-b271b5e3b2f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    ]
    const photosArray = []
    // const ph = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h']
    for (let i = 0; i < 4; i++) {
        const ph = faker.helpers.arrayElement(photos)
        if (!photosArray.includes(ph)) {
            photosArray.push(ph)
        }
    }
    const offer = faker.helpers.arrayElement(['Yes', 'No'])
    const cancelation = ['If cancelled up to 48 hours before arrival no fee will be charged', 'If cancelled less than 48 hours before arrival 100% of the first night will be charged', 'If you are a no-show, 100% of the first night will be charged']

    return await new Room({
        number: faker.datatype.number({ min: 100, max: 500 }),
        photos: photosArray,
        price: faker.datatype.number({ min: 100, max: 400 }),
        offer: offer,
        discount: offer === 'No' ? 0 : faker.helpers.arrayElement([5, 10, 20]),
        type: faker.helpers.arrayElement(['Single Bed', 'Double Bed', 'Double Bed Superior', 'Suite']),
        status: faker.helpers.arrayElement(['Booked', 'Available']),
        amenities,
        cancelation_policy: faker.helpers.arrayElement(cancelation)
    })
}

const insertRooms = async (rooms) => {
    for (let i = 0; i < rooms; i++) {
        const room = await randomRoom()
        await Room.create(room)
    }
}

// BOOKINGS
const randomBooking = async () => {
    return await new Booking({
        order: faker.date.between("2022-01-01", "2022-12-12"),
        checkin: faker.date.between("2022-12-12", "2023-12-12"),
        checkout: faker.date.between("2022-12-12", "2023-12-12"),
        request: faker.helpers.arrayElement(['Late Checkout', 'Early Checkin', 'None']),
        room_type: faker.helpers.arrayElement(['Single Bed', 'Double Bed', 'Double Bed Superior', 'Suite']),
        number: faker.datatype.number({ min: 1, max: 2000 }),
        photo: faker.helpers.arrayElement(['https://travl.dexignlab.com/xhtml/images/room/room1.jpg', 'https://travl.dexignlab.com/xhtml/images/room/room6.jpg']),
        status: faker.helpers.arrayElement(['In Progress', 'Checking-In', 'Checking Out']),
        customer_name: faker.name.fullName(),
        customer_email: faker.internet.email(),
        customer_phone: faker.phone.number("+## ## ### ## ##")
    })
}

const insertBookings = async (bookings) => {
    for (let i = 0; i < bookings; i++) {
        const booking = await randomBooking()
        await await Booking.create(booking)
    }
}

const { faker } = require('@faker-js/faker');
const connection = require('./database');
const dbQuery = require('./helpers/dbQuery');
const hashPassword = require('./helpers/hashPassword');

async function run() {
    await connection.connect()

    // await insertCustomers(10)
    // await insertUsers(10)
    // await insertReviews(20)
    // await insertRooms(10)
    // await insertBookings(10)
    // await insertAmenities(3)

    await connection.end()
}

run()

//amenities
const randomAmenities = async() => {
    const idRooms = await dbQuery('SELECT id_rooms FROM miranda.rooms', null)
    const ids = idRooms.map(e => e.id_rooms)
    const idAm = await dbQuery('SELECT idamenities FROM miranda.amenities', null)
    const ida = idAm.map(e => e.idamenities)
    return {
        id_room: faker.helpers.arrayElement(ids),
        id_amenity: faker.helpers.arrayElement(ida)
    }
}

const insertAmenities = async (a) => {
    // const amenities = []
    for(let i = 0; i < a; i++){
        const amenity = await randomAmenities()
        // amenities.push(amenity)
        await dbQuery('INSERT INTO miranda.rooms_amenities SET ?', amenity)
    }
}

// bookings
const randomBooking = async () => {
    const idCustomers = await dbQuery('SELECT id_customer FROM miranda.customers;', null)
    const ids = idCustomers.map(e => e.id_customer);
    return {
        id_customer: faker.helpers.arrayElement(ids),
        order: faker.date.between("2022-01-01", "2022-12-12"),
        checkin: faker.date.between("2022-12-12", "2023-12-12"),
        checkout: faker.date.between("2022-12-12", "2023-12-12"),
        request: faker.helpers.arrayElement(['Late Checkout', 'Early Checkin', 'None']),
        id_room_type: faker.helpers.arrayElement(['1', '2', '3', '4']),
        number: faker.datatype.number({ min: 1, max: 2000 }),
        photo: faker.helpers.arrayElement(['https://travl.dexignlab.com/xhtml/images/room/room1.jpg', 'https://travl.dexignlab.com/xhtml/images/room/room6.jpg']),
        id_status: faker.helpers.arrayElement(['1', '2', '3'])
    }
}

const insertBookings = async (bookings) => {
    for(let i = 0; i < bookings; i++){
        const booking = await randomBooking()
        await dbQuery('INSERT INTO miranda.bookings SET ?', booking)
    }
}

// customers - clients
const randomCustomer = () => {
    return {
        id_customer: faker.datatype.number({ min: 1, max: 10000 }),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        telephone: faker.phone.number("+## ## ### ## ##")
    }
}

const insertCustomers = async (customers) => {
    for (let i = 0; i < customers; i++) {
        const customer = await randomCustomer()
        await dbQuery('INSERT INTO miranda.customers SET ?', customer)
    }
}


// users
const randomUser = async () => {
    const users = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    ]
    const descriptions = ['Receptionist', 'Tourist Information', 'Kitchen', 'Cleaning', 'Security']

    const password = faker.internet.password()

    return {
        // id_user: faker.datatype.number({ min: 1, max: 10000 }),
        name: faker.name.fullName(),
        photo: faker.helpers.arrayElement(users),
        email: faker.internet.email(),
        start: faker.date.between("2022-01-01", "2022-12-12"),
        description: faker.helpers.arrayElement(descriptions),
        contact: faker.phone.number("+## ## ### ## ##"),
        idStatus: faker.helpers.arrayElement(['1', '2']), // 1--ACTIVE 2--INACTIVE
        password: await hashPassword(password)
    }
}

const insertUsers = async (users) => {
    for (let i = 0; i < users; i++) {
        const customer = await randomUser()
        await dbQuery('INSERT INTO miranda.users SET ?', customer)
    }
}

// reviews
const randomReview = async () => {
    const idCustomers = await dbQuery('SELECT id_customer FROM miranda.customers;', null)
    const ids = idCustomers.map(e => e.id_customer);
    return {
        id_contacts: faker.datatype.uuid(),
        comment: faker.lorem.paragraphs(),
        archived: faker.helpers.arrayElement(['0', '1']),
        idCustomer: faker.helpers.arrayElement(ids)
    }
}

const insertReviews = async (rev) => {
    for (let i = 0; i < rev; i++) {
        const review = await randomReview()
        await dbQuery('INSERT INTO miranda.contacts SET ?', review)
    }
}

// rooms
const randomRoom = () => {
    return {
        id_rooms: faker.datatype.number({ min: 1, max: 2000000 }),
        number: faker.datatype.number({ min: 1, max: 2000 }),
        photos: faker.helpers.arrayElement(['https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60', 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60']),
        price: faker.datatype.number({ min: 100, max: 1000 }),
        offer: faker.datatype.number({ min: 5, max: 40 }),
        idType: faker.helpers.arrayElement(['1', '2', '3', '4']),
        id_status: faker.helpers.arrayElement(['1', '2'])
    }
}

const insertRooms = async (rooms) => {
    for (let i = 0; i < rooms; i++) {
        const room = await randomRoom()
        await dbQuery('INSERT INTO miranda.rooms SET ?', room)
    }
}
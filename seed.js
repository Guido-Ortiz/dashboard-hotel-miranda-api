const { faker } = require('@faker-js/faker');
const { connect, disconnect } = require('./db/connection');
const hashPassword = require('./helpers/hashPassword');
const Review = require('./schemas/review');
const User = require('./schemas/user');

async function run() {
    await connect()

    // await insertCustomers(10)
    // await insertUsers(10)
    // await insertReviews(10)
    // await insertRooms(10)
    // await insertBookings(10)
    // await insertAmenities(3)

    await disconnect()
}

run()

// users
const randomUser = async () => {
    
    const descriptions = ['Receptionist', 'Tourist Information', 'Kitchen', 'Cleaning', 'Security']

    const password = faker.internet.password()

    return await new User ({
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
    return await new Review ({
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
const { faker } = require('@faker-js/faker');
const { connect, disconnect } = require('./db/connection');
const hashPassword = require('./helpers/hashPassword');
const User = require('./schemas/user');

async function run() {
    await connect()

    // await insertCustomers(10)
    // await insertUsers(10)
    // await insertReviews(20)
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
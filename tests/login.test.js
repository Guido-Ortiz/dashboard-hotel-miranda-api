const request = require('supertest');
const app = require('../app');

describe('Succesfull login', () => {
    it('should create a token', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                id: 1,
                email: 'admin@hotelmiranda.com',
                password: '12345'
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('token')
    })
})

describe('Unsuccesfull login', () => {
    it('should display wrong credentials', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                id: 1,
                email: 'wrong@email.com',
                password: 'wrong'
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toContain('Wrong credentials')
    })
})
'use strict';
const request = require('supertest');
const app = require('../app');
jest.useFakeTimers();

let token;

beforeAll((done) => {
  request(app)
    .post('/login')
    .send({ email: 'admin@hotelmiranda.com', password: '12345' })
    .end((err, res) => {
      token = res.body.token
      done()
    });
});

describe('/bookings', () => {

  it('should return 200 if authorize', () => {
    request(app)
      .get('/bookings')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .expect('Content-Type', /json/)
  });

  it('should return 401 if no token was provided', () => {
    request(app)
      .get('/bookings')
      .expect(401);
  });

}); 
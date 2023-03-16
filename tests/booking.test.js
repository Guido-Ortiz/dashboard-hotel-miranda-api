'use strict';
// var should = require('should');
var app = require('../app');
var request = require('supertest')(app);


describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })
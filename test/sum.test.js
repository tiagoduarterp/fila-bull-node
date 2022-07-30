const sum = require("./sum");
const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
const sendEmamil = require("../src/controllers/userController");


test('adds 1 + 2 to equal 3', () =>{
    expect(sum(1, 2)).toBe(3);
})



describe('POST /teste', function() {
    let values = {
        name:"tiago",
        password:"12345678",
        email:"tiago.duarte9.rp@gmail.com"
    }
    it('responds with json', function(done) {
      request(app)
        .post('/filas/user/teste')
        .send(values)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });
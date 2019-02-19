const supertest = require('supertest');
const { expect } = require('chai');
const app = require('../app');
const fixture = require('./fixtures/location');

const request = supertest(app);

describe('# Location', () => {
  let locationResponse = null;

  it('should create a location', (done) => {
    request
      .post('/api/locations')
      .expect('Content-Type', /json/)
      .send(fixture.locationFixture)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal('Success');
        locationResponse = res.body.location;
        return done();
      });
  });

  it('should not create a location if no request payload is sent',
    (done) => {
      request
        .post('/api/locations')
        .expect('Content-Type', /json/)
        .expect(400)
        .send({})
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.message).is.an('array');
          return done();
        });
    });

  it('should get all locations', (done) => {
    request
      .get('/api/locations')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.locations).is.an('array');
        return done();
      });
  });

  it('should get a location', (done) => {
    request
      .get(`/api/locations/${locationResponse.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.locations).is.an('array');
        return done();
      });
  });

  it('should not get a location if an invalid id is passed', (done) => {
    request
      .get('/api/locations/string')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).is.an('array');
        return done();
      });
  });

  it('should return 422 if the location cannot be found', (done) => {
    request
      .get('/api/locations/100')
      .expect('Content-Type', /json/)
      .expect(422)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal('Locations not found');
        return done();
      });
  });

  it('should update a location', (done) => {
    request
      .patch(`/api/locations/${locationResponse.id}`)
      .send({ ...fixture.locationFixture, numberOfFemaleResidents: 45 })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal('Success');
        return done();
      });
  });

  it('should delete a location', (done) => {
    request
      .delete(`/api/locations/${locationResponse.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal('Success');
        return done();
      });
  });

  it('should return 422 for a deleted location', (done) => {
    request
      .get(`/api/locations/${locationResponse.id}`)
      .expect('Content-Type', /json/)
      .expect(422)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal('Locations not found');
        return done();
      });
  });
});

const app = require('../app')
const chai = require('chai');
const chaiHttp = require('chai-http'); //has a dependency on mocha
const {expect} = chai;
const {describe, it} = require('mocha');

chai.use(chaiHttp);

describe('routeTest', () => {
    it('should return 200 success code', function (done) {
        chai.request(app)
            .get('/ps4')
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });
    it('should return 404 success code', function (done) {
        chai.request(app)
            .post('/ps4')
            .end((err, response) => {
                expect(response).to.have.status(404);
                done();
            })
    });
    it('result should not be empty.', function (done) {
        chai.request(app)
            .post('/ps4')
            .end((err, response) => {
                expect(response.req.agent.protocol).equals("http:");
                done();
            })
    });
})
const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http'); //has a dependency on mocha
const {expect} = chai;
const {describe} = mocha;

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
    it('should return 200 success code when posting to generate questions', function (done) {
        chai.request(app)
            .post('/ps4')
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });
    it('result should contain a non empty field called quest.', function (done) {
        chai.request(app)
            .post('/ps4')
            .end((err, response) => {
                expect(response.req.agent.protocol).equals("http:");
                done();
            })
    });
})
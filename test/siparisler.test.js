const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const server = require('../app')

chai.use(chaiHttp);

let token;

describe('/api/siparisler test', () => {
    before((done) => {
        chai.request(server)
            .post('/auth')
            .send({email: 'omercr2@techno.com', sifre:'qweq1312c3123'})
            .end((err, res) => {
                token = res.body.token;
                done();
            });
    });

    describe('/GET siparisler', () => {
        it('it should GET all the siparisler', (done) => {
            chai.request(server)
                .get('/api/siparisler/sayfa/1')
                .set('x-access-token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        });
    });
});
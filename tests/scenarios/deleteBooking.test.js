import RestbookerAPI from '../pages/restbooker.api.js';
import * as data from '../data/updatedbooking.js';
import BaseAPI from '../pages/base.api'
import request from 'supertest';


describe('Verify user can be delete booking ', () => {
    it('verify user can be delete by booking id', async () => {
        const response = await RestbookerAPI.deleteBookingID(data.UPDATE_PUT);
        request(BaseAPI)
            .delete('/booking/7')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cookie', 'token=')
            .end(function(err, res) {
                expect(res.statusCode).to.be.equal(201);
                if (err) {
                    throw err;
                }
                done();
            });
    });
    it('verify show 404 status code for delete booking id', async () => {
        const response = await RestbookerAPI.deleteBookingID(data.UPDATE_PUT);
        request(BaseAPI)
            .get('/booking/7')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function(err, res) {
                expect(res.statusCode).to.be.equal(404);
                if (err) {
                    throw err;
                }
                done();
            });
    });

   
});
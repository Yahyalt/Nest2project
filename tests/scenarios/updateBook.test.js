import { assert } from 'chai';
import RestbookerAPI from '../pages/restbooker.api.js';
import * as data from '../data/updatedbooking.js';
import BaseAPI from '../pages/base.api'
import request from 'supertest';


describe('As a guest, I want to update user data (using PUT method)', () => {
    it('Should be succesfully update user data', async () => {
    
 
        const response = await RestbookerAPI.updatePut(data.UPDATE_PUT);
        request(BaseAPI)
            .put('/booking/7' )
            .send(data)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cookie', 'token=' )
            .end(function(err, response) {
                assert(response.data.firstname).to.be.equal(updatedbooking.firstname);
                assert(response.data.lastname).to.be.equal(updatedbooking.lastname);
                assert(response.data.totalprice).to.be.equal(updatedbooking.totalprice);
                assert(response.data.depositpaid).to.be.equal(updatedbooking.depositpaid);
                assert(response.data.bookingdates.checkin).to.be.equal(updatedbooking.bookingdates.checkin);
                assert(response.data.bookingdates.checkout).to.be.equal(updatedbooking.bookingdates.checkout);
                assert(response.data.additionalneeds).to.be.equal(updatedbooking.additionalneeds);
                if (err) {
                    throw err;
                }
                done();
            });
    });

   
});
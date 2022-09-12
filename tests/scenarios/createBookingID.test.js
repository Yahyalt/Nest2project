import { assert } from 'chai';
import RestbookerAPI from '../pages/restbooker.api';
import * as data from '../data/user.data';
import BaseAPI from '../pages/base.api';
import request from 'supertest';

describe('Verify user can create booking', () => {
    it('Should be succesfully create booking id', async () => {
        const response = await RestbookerAPI.createBookingids(data.CREATE_BOOKING_ID);
        request(BaseAPI)
            .post('/booking' )
            .send(data.CREATE_BOOKING_ID)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function(err, response) {
                assert(res.statusCode).to.be.equal(200);
                assert(response.data.firstname).to.be.equal(updatedbooking.firstname);
                assert(response.data.lastname).to.be.equal(updatedbooking.lastname);
                assert(response.data.totalprice).to.be.equal(updatedbooking.totalprice);
                assert(response.data.depositpaid).to.be.equal(updatedbooking.depositpaid);
                assert(response.data.bookingdates.checkin).to.be.equal(updatedbooking.bookingdates.checkin);
                assert(response.data.bookingdates.checkout).to.be.equal(updatedbooking.bookingdates.checkout);
                assert(response.data.additionalneeds).to.be.equal(updatedbooking.additionalneeds);
                if (err) {
                    throw err;
                };
                
            });
    });

   
});
import { assert } from 'chai';
import RestbookerAPI from '../pages/restbooker.api';
import * as data from '../data/user.data';
import BaseAPI from '../pages/base.api';
import request from 'supertest';

describe('Verify user can create booking', () => {
    it('Should be succesfully create booking id', async () => {
        const response = await RestbookerAPI.createBookingids(data.CREATE_BOOKING_ID);
        console.log(response.data)
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



describe('Verify User Can Create Field', () => {
    it('Verify User Can Add Booking Data', async () => {
   
    const response = await RestbookerAPI.createBookingids(data.CREATE_BOOKING_ID);
    //chai utk assertion
    assert.equal(response.status, 200);
    assert.containsAllKeys(response.data, ["bookingid", "firstname", "lastname", "totalprice", "depositpaid", "bookingdates", "checkin", "checkout", "additionalneeds"]);
    assert.isNumber(response.data.bookingid).not.to.be.null;;
    assert.isString(response.data.booking.firstname).to.be.equal(booking.firstname);
    assert.isString(response.data.booking.lastname).to.be.equal(booking.lastname);
    assert.isNumber(response.data.booking.totalprice).to.be.equal(booking.totalprice);
    assert.isBoolean(response.data.booking.depositpaid).to.be.equal(booking.depositpaid);
    assert.isObject(response.data.booking.bookingdates).to.be.equal(booking.bookingdates);
    assert.isString(response.data.bookingdates.checkin).to.be.equal(bookingdates.checkin);
    assert.isString(response.data.bookingdates.checkout).to.be.equal(bookingdates.checkout);
    assert.isString(response.data.booking.additionalneeds).to.be.equal(booking.additionalneeds);
    
})
})
});
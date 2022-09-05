import { assert } from 'chai';
import RestbookerAPI from '../pages/restbooker.api';
import * as data from '../data/user.data';

describe('Verify User Can Create Field', () => {
    it('Verify User Can Add Booking Data', async () => {
    const response = await RestbookerAPI.createBookingids(data.CREATE_BOOKING_ID);
    //chai utk assertion
    assert.equal(response.status, 200);
    assert.containsAllKeys(response.data, ["bookingid", "booking", "firstname", "lastname", "totalprice", "depositpaid", "bookingdates", "checkin", "checkout", "additionalneeds"]);
    assert.isNumber(response.data.bookingid);
    assert.isObject(response.data.booking);
    assert.isString(response.data.firstname);
    assert.isString(response.data.lastname);
    assert.isNumber(response.data.totalprice);
    assert.isBoolean(response.data.depositpaid);
    assert.isObject(response.data.bookingdates);
    assert.toString(response.data.checkin);
    assert.toString(response.data.checkout);
    assert.isString(response.data.additionalneeds);

    })
});
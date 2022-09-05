import { assert } from 'chai';
import RestbookerAPI from '../pages/restbooker.api.js';
import * as data from '../data/user.data.js';

//token belum di define
describe('Booking', () => {
    let token; 
    before(async() => {
        token = await getToken(VALID_TOKEN);
      });

    it('Verify user able update booking with token', async () => {
        const response = await RestbookerAPI.updateWithToken(data.UPDATEBOOKING_WITHTOKEN);
//chai utk assertion
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["firstname", "lastname", "totalprice", "depositpaid", "checkin", "checkout", "additionalneeds" ]);
        assert.isString(response.data.firstname);
        assert.isString(response.data.lastname);
        assert.isNumber(response.data.totalprice);
        assert.isBoolean(response.data.depositpaid);
        //assert.isString(response.data.bookingdates);
        assert.isDate(response.data.checkin);
        assert.isDate(response.data.checkout);
        assert.isString(response.data.additionalneeds);

    });
});
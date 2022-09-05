import { assert } from 'chai';
import RestbookerAPI from '../pages/restbooker.api';
import * as data from '../data/user.data.js';
import BaseAPI from '../pages/base.api';

describe('As a guest, I want to update user data using PUT Method', () => {
    it('should receive a status code of 200 with login', function(done) {
        request(BaseAPI)
            .get('/auth')
            .auth('admin', 'password123')
            .expect(200, done);
    });
    it('Should be succesfully update user data', async () => {
        const response = await RestbookerAPI.updateput(data.UPDATE_PUT);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["firstname", "lastname", "totalprice","depositpaid", "bookingdates", "checkin", "checkout", "additionalneeds" ]),
        assert.isString(response.data.lastname);
        assert.isNumber(response.data.totalprice);
        assert.isBoolean(response.data.depositpaid);
        assert.isObject(response.data.bookingdates);
        assert.isString(response.data.checkin);
        assert.isString(response.data.checkout);
        assert.isString(response.data.additionalneeds);

    });
});
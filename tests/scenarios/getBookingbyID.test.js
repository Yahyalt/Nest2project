import { assert } from "chai";
import RestbookerAPI from "../pages/restbooker.api.js";

describe('As a User, I want list of user', () =>{
    it('should successfully see list of user', async () => {
        const response = await RestbookerAPI.getBookingbyID();
    
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["additionalneeds", "bookingdates", "depositpaid", "firstname", "lastname", "totalprice"]);
        
        assert.isString(response.data.firstname);
        assert.isString(response.data.lastname);
        assert.isNumber(response.data.totalprice);
        assert.isBoolean(response.data.depositpaid);
        assert.isObject(response.data.bookingdates);
        assert.toString(response.data.checkin);
        assert.toString(response.data.checkout);
        assert.isString(response.data.additionalneeds);

    
    });
});
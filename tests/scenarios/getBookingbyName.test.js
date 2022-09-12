import { assert } from "chai";
import RestbookerAPI from "../pages/restbooker.api";

describe('As a User, I want list of user', () =>{
    it.only('should successfully see list of user', async () => {
        const response = await RestbookerAPI.getAllbookingFilterByname();
    
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ['bookingid']);
        assert.isNumber(response.data.bookingid);
    //    assert.isNumber(response.data.page);
    //     assert.isNumber(response.data.per_page);
    //     assert.isNumber(response.data.total);
    //     assert.isNumber(response.data.total_pages);
    expect(response.data).to.be.jsonSchema(schema.VALID_BOOKING_NAME);
        //assert.isArray(response.data.data);
    
    });
});
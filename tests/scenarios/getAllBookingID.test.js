import { assert } from "chai";
import RestbookerAPI from "../pages/restbooker.api";


describe('Get all booking IDs', () =>{
it('should successfully see list of all booking IDs', async () => {
    const response = await RestbookerAPI.getAllbookingIds();

    assert.equal(response.status, 200);
    assert.containsAllKeys(response, ["data"]);
    //assert.isArray(response.data.data);
    

});   


});
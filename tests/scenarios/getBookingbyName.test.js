import chai, { expect } from 'chai';
import jsonSchema from 'chai-json-schema';
chai.use(jsonSchema);

import RestbookerAPI from "../pages/restbooker.api";
import { VALID_BOOKING_NAME } from '../schema/getBookingName.schema.js';

describe('As a User, I want list of user', () =>{
    it.only('should successfully see list of user', async () => {
        const response = await RestbookerAPI.getAllbookingFilterByname();
        //console.log(response.data.bookingid)
        expect (response.status, 200);
        expect(response.data, ['bookingid']);
        expect(response.data.bookingid);
    
        expect(response.data).to.jsonSchema(VALID_BOOKING_NAME);
    
    });
});
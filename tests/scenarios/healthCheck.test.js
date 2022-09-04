import { assert } from 'chai';
import RestbookerAPI from '../pages/restbooker.api.js';
import * as data from '../data/user.data.js';

describe('Verify user can check the endpoint', () => {
    it('Verify user click Send button', async () => {
        const response = await RestbookerAPI.healthCheck(data.HEALTH_CHECK);
        assert.equal(response.status, 201);
        
        
    });
});
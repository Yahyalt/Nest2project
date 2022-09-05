import { assert } from 'chai';

import RestbookerAPI from '../pages/restbooker.api.js';
import * as data from '../data/user.data.js';

describe('Verify user can create token', () => {
    it.('Verify user input valid username and valid password', async () => {
        const response = await RestbookerAPI.createToken(data.CREATE_TOKEN_A);
//chai utk assertion
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["token"]);
        assert.isString(response.data.token);

    });

    it('Verify user input invalid username and valid password', async () => {
        const response = await RestbookerAPI.createToken(data.CREATE_TOKEN_B);
        assert.isString(response.data.reason, "Bad Credential");
    });
    
    it('Verify user input valid username and invalid password', async () => {
        const response = await RestbookerAPI.createToken(data.CREATE_TOKEN_C);
        assert.isString(response.data.reason, "Bad Credential");
    });

    it('Verify user input empty username and valid password', async () => {
        const response = await RestbookerAPI.createToken(data.CREATE_TOKEN_D);
        assert.isString(response.data.reason, "Bad Credential");
    });

    it('Verify user input valid username and empty password', async () => {
        const response = await RestbookerAPI.createToken(data.CREATE_TOKEN_E);
        assert.isString(response.data.reason, "Bad Credential");
    });

});

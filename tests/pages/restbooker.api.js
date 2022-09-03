import BaseAPI from '../pages/restbooker.api.js';

const RestbookerAPI = {
    createToken: (data) => BaseAPI.post('/auth', data),
    
}

export default RestbookerAPI ;

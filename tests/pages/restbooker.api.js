import BaseAPI from '../pages/base.api.js';

const RestbookerAPI = {
    createToken: (data) => BaseAPI.post('/auth', data),
    healthCheck: (data) => BaseAPI.get('/ping', data),
    updateWithToken: (data) => BaseAPI.put('/booking/:id', data), 
    updateWithoutToken: (data) => BaseAPI.put('/booking/:id', data),
    getToken: (data) => BaseAPI.post('/auth', data)
}

export default RestbookerAPI ;

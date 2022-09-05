import BaseAPI from '../pages/base.api.js';

const RestbookerAPI = {
    createToken: (data) => BaseAPI.post('/auth', data),
    updateput: (data) => BaseAPI.put('/booking/3', data),
    healthCheck: (data) => BaseAPI.get('/ping', data),
    updateWithToken: (data) => BaseAPI.put('/booking/:id', data), 
    updateWithoutToken: (data) => BaseAPI.put('/booking/:id', data),
    getToken: (data) => BaseAPI.post('/auth', data)
}

export default RestbookerAPI ;

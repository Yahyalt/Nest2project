import BaseAPI from '../pages/base.api.js';

const RestbookerAPI = {
    createToken: (data) => BaseAPI.post('/auth', data),
    updateput: (data) => BaseAPI.put('/booking/3', data),
    healthCheck: (data) => BaseAPI.get('/ping', data),
    getToken: (data) => BaseAPI.post('/auth', data),
    getAllbookingIds: (data) => BaseAPI.get('/booking', data)


};
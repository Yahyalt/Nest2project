import BaseAPI from '../pages/base.api.js';

const RestbookerAPI = {
    createToken: (data) => BaseAPI.post('/auth', data),
    updatePut: (data) => BaseAPI.put('/booking', data),
    healthCheck: (data) => BaseAPI.get('/ping', data),
    getToken: (data) => BaseAPI.post('/auth', data),
    getAllbookingIds: (data) => BaseAPI.get('/booking', data)


}

export default RestbookerAPI;
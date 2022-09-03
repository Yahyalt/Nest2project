import BaseAPI from '../pages/base.api.js';

const RestbookerAPI = {
    createToken: (data) => BaseAPI.post('/auth', data),
    getBookingIds: (data) => BaseAPI.get('/booking', data),
    getBookingbyID:(data) => BaseAPI.get('/booking/:id',data),

    
}

export default RestbookerAPI ;

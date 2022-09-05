import BaseAPI from '../pages/base.api';

const RestbookerAPI = {
    createToken: (data) => BaseAPI.post('/auth', data),
    updatePut: (data) => BaseAPI.put('/booking', data),
    healthCheck: (data) => BaseAPI.get('/ping', data),
    getToken: (data) => BaseAPI.post('/auth', data),
    getAllbookingIds: (data) => BaseAPI.get('/booking', data),
    createBookingids: (data) => BaseAPI.post('/booking', data),
    getAllbookingFilterByname: () => BaseAPI.get('/booking?firstname=Yahya&lastname=Hafidz')

};




export default RestbookerAPI;
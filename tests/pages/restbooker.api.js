import BaseAPI from '../pages/base.api.js';

const RestbookerAPI = {
    createToken: (data) => BaseAPI.post('/auth', data),
    updateput: (data) => BaseAPI.put('/booking', data),

}



export default RestbookerAPI ;

import BaseAPI from '../pages/base.api.js';

const RestbookerAPI = {
    createToken: (data) => BaseAPI.post('/auth', data),
<<<<<<< HEAD
    updateput: (data) => BaseAPI.put('/booking', data),

}



export default RestbookerAPI ;
=======
    updateput: (data) => BaseAPI.put('/booking/3', data),
    healthCheck: (data) => BaseAPI.get('/ping', data),
    getToken: (data) => BaseAPI.post('/auth', data),
    getAllbookingIds: (data) => BaseAPI.get('/booking', data)


}

export default RestbookerAPI;
>>>>>>> 5080e8d18c06802444749f6be4f2904f6beca01d

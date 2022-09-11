import dotenv from 'dotenv';
import axios from 'axios';
import querystring from 'querystring';

dotenv.config();

const BaseAPI = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    },
    transformRequest: [
        function (data) {
        return querystring.stringify(data)
        }
    ],
    validateStatus: function () {
        return true;
    }
});

export default BaseAPI;
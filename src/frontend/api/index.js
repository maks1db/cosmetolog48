import axios from 'axios';

let API_PREFIX = '';
if (process.env.DEV || !process.env.BROWSER){
    API_PREFIX = 'http://localhost:4104';
}

API_PREFIX += '/api/v1';

/**
 * 
 * @param {Object} data (name, phone, description) 
 */
export const send = (data) => axios.post(`${API_PREFIX}/request/send`, data);

export const galleryItems = () => {
    return axios.get(`${API_PREFIX}/main/galleryItems`);
};
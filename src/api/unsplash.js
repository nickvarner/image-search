import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID iWYRL4FweyXiVQx0kLKwCAji4QpevH2FNJzRd2OHaqQ'
      }
})
import axios from 'axios';

const baseURL = 'http://192.168.15.6:3334';
// const baseURL = 'http://localhost:3334';

const api = axios.create({
  baseURL,
});

export default api;

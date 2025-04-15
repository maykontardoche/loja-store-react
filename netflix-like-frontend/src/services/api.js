import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api' // Certifique-se de que o back-end esteja rodando nessa URL
});

export default api;

// src/services/api.js
import axios from 'axios';

// Cria uma instância do axios com a URL base do backend
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // URL base para o backend Django
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptador para lidar com solicitações antes de serem enviadas
api.interceptors.request.use(
  (config) => {
    // Você pode adicionar tokens de autenticação aqui se necessário
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => {
    // Lida com erros antes de a solicitação ser enviada
    return Promise.reject(error);
  }
);

// Interceptador para lidar com respostas da API
api.interceptors.response.use(
  (response) => {
    // Lida com a resposta antes de passar para o código
    return response;
  },
  (error) => {
    // Lida com erros de resposta da API
    if (error.response) {
      console.error('Erro na resposta da API:', error.response);
      // Você pode tratar erros específicos com base no status do erro
      if (error.response.status === 401) {
        // Por exemplo, redirecionar para login se não autorizado
        // window.location.href = '/login';
      }
    } else if (error.request) {
      console.error('Erro na requisição:', error.request);
    } else {
      console.error('Erro desconhecido:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;

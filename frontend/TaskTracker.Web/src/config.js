// Centraliza configuración y permite cambiar endpoints sin tocar el resto.
export const CONFIG = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || '/api',
  //API_BASE_URL: '/api',
  //API_VERSION: 'v1',
};

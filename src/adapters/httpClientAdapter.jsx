const API_URL = "http://localhost:3000"; 

// Funcion que realiza la petición a la API
const request = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`Error en la petición: ${response.statusText}`);
  }

  return response.json();
};


// Metodos
export const httpClientAdapter = {
  get: (endpoint) => request(endpoint),

  post: (endpoint, data) =>
    request(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),

  patch: (endpoint, data) =>
    request(endpoint, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),

  delete: (endpoint) =>
    request(endpoint, {
      method: "DELETE",
    }),
};

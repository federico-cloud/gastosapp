import { httpClientAdapter } from "../adapters/httpClientAdapter";

export const apiClient = {
  get: (endpoint) => httpClientAdapter.get(endpoint),
  post: (endpoint, data) => httpClientAdapter.post(endpoint, data),
  patch: (endpoint, data) => httpClientAdapter.patch(endpoint, data),
  delete: (endpoint) => httpClientAdapter.delete(endpoint),
};

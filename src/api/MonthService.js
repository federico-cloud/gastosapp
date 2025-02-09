import { apiClient } from "./apiClient";

export const monthService = {
  //Obtener los meses del año
  getMonths: () => apiClient.get('/months'),
}
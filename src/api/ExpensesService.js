import { apiClient } from "./apiClient";

export const expensesService = {
  // Obtener todos los gastos de un mes específico
  getExpensesByYear: (year) => 
    apiClient.get(`/expenses?yearId=${year}`),

  // Obtener todos los gastos de un mes específico
  getExpensesByMonth: (year, month) =>
    apiClient.get(`/expenses?yearId=${year}&monthId=${month}`),

  // Obtener los gastos de un día específico
  getExpensesByDay: (year, month, day) =>
    apiClient.get(`/expenses?yearId=${year}&monthId=${month}&dayId=${day}`),
};

import { useEffect, useState } from "react";
import { expensesService } from "../api";

export const useExpensesByMonth = ({ year, month }) => {
  const [expensesByMonth, setExpensesByMonth] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpensesByMonth = async () => {
      try {
        const data = await expensesService.getExpensesByMonth(year, month);
        setExpensesByMonth(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchExpensesByMonth(year, month);
  }, [year, month]);

  return { expensesByMonth, loading, error };
};

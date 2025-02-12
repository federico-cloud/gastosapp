import { useEffect, useState } from "react";
import { expensesService } from "../api";

export const useExpensesByYear = ({ year }) => {
  const [expensesByYear, setExpensesByYear] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpensesByYear = async () => {
      try {
        const data = await expensesService.getExpensesByYear(year);
        setExpensesByYear(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchExpensesByYear(year);
  }, [year]);

  return { expensesByYear, loading, error };
};

import { useEffect, useState } from "react";
import { expensesService } from "../api";

export const useExpensesByDay = ({ year, month, day }) => {
  const [expensesByDay, setExpensesByDay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpensesByDay = async () => {
      try {
        const data = await expensesService.getExpensesByDay(year, month, day);
        setExpensesByDay(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchExpensesByDay(year, month, day);
  }, [year, month, day]);

  return { expensesByDay, loading, error };
};

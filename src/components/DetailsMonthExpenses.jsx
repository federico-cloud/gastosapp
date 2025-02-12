import { useParams } from "react-router-dom";
import { useExpensesByYear } from "../hooks/useExpensesByYear";

export const DetailsMonthExpenses = () => {
  const { year, month } = useParams();
  const { expensesByYear, loading, error } = useExpensesByYear({ year });

  const expensesByMonth = expensesByYear.filter(
    (expense) => expense.monthId === month
  );

  console.log(expensesByMonth)

  return (
    <h1 className="text-white">
      Detalles del Mes {month} y ano {year}
    </h1>
  );
};

import { useParams } from "react-router-dom";
import { useExpensesByYear } from "../hooks/useExpensesByYear";
import { ExpensesChart } from "../components/ExpensesChart";
import { ManageExpenses } from "../pages/ManageExpenses";

export const DetailsMonthExpenses = () => {
  const { year, month } = useParams();
  const { expensesByYear, loading, error } = useExpensesByYear({
    year: Number(year),
  });

  if (loading) return <p className="text-white">Cargando gastos...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const monthNum = Number(month);
  const data = expensesByYear.filter((expense) => expense.monthId === monthNum);

  return (
    <div className="container text-white">
      <h1 className="text-2xl font-bold mb-4">
        Detalles del Mes {month} - Año {year}
      </h1>
      <ExpensesChart data={data} />
      <ManageExpenses />
    </div>
  );
};

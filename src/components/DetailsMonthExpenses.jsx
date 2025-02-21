import { useParams } from "react-router-dom";
import { ExpensesChart } from "../components/ExpensesChart";
import { useExpensesByMonth } from "../hooks";
import { useState, useMemo } from "react";
import { TableMonthExpenses } from "./TableMonthExpenses";

export const DetailsMonthExpenses = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const { year, month } = useParams();
  const monthNum = Number(month);
  const yearNum = Number(year);

  // Obtener los gastos del mes
  const { expensesByMonth, loading, error } = useExpensesByMonth({
    year: yearNum,
    month: monthNum,
  });

  // Calcular total de gastos del mes
  const totalMonthExpenses = useMemo(
    () => expensesByMonth.reduce((acc, { amount }) => acc + amount, 0),
    [expensesByMonth]
  );

  // Obtener categorías únicas
  const uniqueCategories = useMemo(
    () => ["Todos", ...new Set(expensesByMonth.map((expense) => expense.category))],
    [expensesByMonth]
  );

  // Manejar clic en categorías
  const handleActiveCategory = (event) => {
    const category = event.target.dataset.category;
    setActiveCategory(category.toLowerCase() === "todos" ? null : category);
  };

  if (loading) return <p className="text-white">Cargando gastos...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-6 text-white container-col">
      {/* Título */}
      <h1 className="p-2 text-5xl font-bold text-center">
        Detalles del Mes {month} - Año {year}
      </h1>

      {/* Total Gastos */}
      <p className="p-4 text-5xl italic text-center">
        Total de gastos: ${totalMonthExpenses}
      </p>

      {/* Filtros de Categoría */}
      <ul className="flex-wrap justify-around w-[60%] container-row">
        {uniqueCategories.map((category) => (
          <li
            key={category}
            data-category={category}
            className={`py-4 hover:cursor-pointer ${
              activeCategory === category ? "font-bold text-teal-400" : ""
            }`}
            onClick={handleActiveCategory}
          >
            {category}
          </li>
        ))}
      </ul>

      {/* Tabla y Gráfico */}
      <div className="w-full h-[600px] container-row">
        <TableMonthExpenses
          expensesByMonth={expensesByMonth}
          activeCategory={activeCategory}
        />
        <ExpensesChart data={expensesByMonth} />
      </div>
    </div>
  );
};

import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { MultipleLineChartAdapter } from "../adapters/";
import { useCategories, useExpensesByMonth } from "../hooks/";
import {
  CategoryFilters,
  NewExpenseForm,
  TableMonthExpenses,
} from "../components";

export const DetailsMonthExpenses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { year, month } = useParams();
  const monthNum = Number(month);
  const yearNum = Number(year);

  const { expensesByMonth, loading, error } = useExpensesByMonth({
    year: yearNum,
    month: monthNum,
  });

  const { activeCategories, uniqueCategories, handleActiveCategory } =
    useCategories(expensesByMonth);

  const filteredExpensesByCategory = useMemo(() => {
    if (activeCategories.length === 0) return expensesByMonth;
    return expensesByMonth.filter(({ category }) =>
      activeCategories.includes(category)
    );
  }, [expensesByMonth, activeCategories]);

  const totalExpensesByCategory = useMemo(
    () =>
      filteredExpensesByCategory.reduce((acc, { amount }) => acc + amount, 0),
    [filteredExpensesByCategory]
  );

  // Spinner de carga
  if (loading) return <p className="text-white">Cargando gastos...</p>;
  // Manejo de errores
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="px-20 text-white container-col">
      {/* Título */}
      <h1 className="p-2 text-5xl font-bold text-center">
        Detalles del Mes {month} - Año {year}
      </h1>

      {/* Total de gastos */}
      <p className="p-4 text-5xl italic text-center">
        {activeCategories.length === 0
          ? `Total de gastos: $${totalExpensesByCategory}`
          : `Gastos en ${activeCategories.join(
              ", "
            )}: $${totalExpensesByCategory}`}
      </p>

      {/* Filtros de categoría */}
      <CategoryFilters
        categories={uniqueCategories}
        activeCategories={activeCategories}
        onCategoryClick={handleActiveCategory}
      />

      {/* Gráfico de líneas */}
      <div className="w-full">
        <MultipleLineChartAdapter data={filteredExpensesByCategory} />
      </div>

      {/* Botón para agregar gasto */}
      <button
        className="m-2 ml-auto btn-primary"
        onClick={() => setIsOpen(true)}
      >
        Agregar gasto
      </button>
      {isOpen && <NewExpenseForm togglePopup={() => setIsOpen(false)} />}

      {/* Tabla de gastos */}
      <div className="w-full container-row">
        <TableMonthExpenses
          expensesByMonth={expensesByMonth}
          activeCategory={activeCategories}
        />
      </div>
    </div>
  );
};

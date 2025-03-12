import { useParams } from "react-router-dom";
import { useExpensesByMonth } from "../hooks";
import { useState, useMemo } from "react";
import { TableMonthExpenses } from "./TableMonthExpenses";
import { NewExpenseForm } from "./NewExpenseForm";
import { MultipleLineChartAdapter } from "../adapters/MultipleLineChartAdapter";

export const DetailsMonthExpenses = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { year, month } = useParams();
  const monthNum = Number(month);
  const yearNum = Number(year);

  // Función para abrir y cerrar el pop-up
  const handlePopup = () => {
    setIsOpen(!isOpen);
  };

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

  // Filtrar gastos por categoría
  const filteredExpensesByCategory = useMemo(() => {
    return activeCategories
      ? expensesByMonth.filter(({ category }) => category === activeCategories)
      : expensesByMonth;
  }, [expensesByMonth, activeCategories]);

  // Obtener categorías únicas
  const uniqueCategories = useMemo(
    () => [
      "Todos",
      ...new Set(expensesByMonth.map((expense) => expense.category)),
    ],
    [expensesByMonth]
  );

  // Calcular total de gastos por categoría
  const totalExpensesByCategory = useMemo(() => {
    return filteredExpensesByCategory.reduce(
      (acc, { amount }) => acc + amount,
      0
    );
  }, [filteredExpensesByCategory, activeCategories]);

  // Manejar clic en categorías
  const handleActiveCategory = (event) => {
    const category = event.target.dataset.category;
    if (!activeCategories.includes(category)) {
      setActiveCategories([...activeCategories, category]);
    }

    if (category === "todos") {
      setActiveCategories([]);
    }
  };

  if (loading) return <p className="text-white">Cargando gastos...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="px-20 text-white container-col">
      {/* Título */}
      <h1 className="p-2 text-5xl font-bold text-center">
        Detalles del Mes {month} - Año {year}
      </h1>

      {/* Total Gastos */}
      {activeCategories.length < 2 ? (
        <p className="p-4 text-5xl italic text-center">
          Total de gastos de {activeCategories} : ${totalExpensesByCategory}
        </p>
      ) : (
        null
        // <p className="p-4 text-5xl italic text-center">
        //   Gastos en {activeCategories.map((category) => (  ))}
        // </p>
      )}

      {/* Filtros de Categoría */}
      <ul className="flex-wrap justify-around w-[70%] container-row">
        {uniqueCategories.map((category) => (
          <li
            key={category}
            data-category={category}
            className={`p-4 hover:cursor-pointer ${
              activeCategories.includes(category)
                ? "font-bold text-turqo-600"
                : "text-white"
            }`}
            onClick={handleActiveCategory}
          >
            {category}
          </li>
        ))}
      </ul>

      {/* Grafico */}
      <div className="w-full">
        <MultipleLineChartAdapter
          data={activeCategories ? filteredExpensesByCategory : expensesByMonth}
        />
      </div>

      <button className="m-2 ml-auto btn-primary" onClick={handlePopup}>
        Agregar gasto
      </button>
      {isOpen && <NewExpenseForm togglePopup={handlePopup} />}

      {/* Tabla */}
      <div className="w-full container-row">
        <TableMonthExpenses
          expensesByMonth={expensesByMonth}
          activeCategory={activeCategories}
        />
      </div>
    </div>
  );
};

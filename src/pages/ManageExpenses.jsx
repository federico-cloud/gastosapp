import { useState } from "react";
import { useExpensesByMonth } from "../hooks";

export const ManageExpenses = ({ year, month }) => {
  const [activeCategory, setActiveCategory] = useState();

  const { expensesByMonth, loading, error } = useExpensesByMonth({
    year,
    month,
  });

  if (loading) return <p className="text-white">Cargando gastos...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const uniqueCategories = [
    ...new Set(expensesByMonth.map((expense) => expense.category)),
  ];

  return (
    <>
      <div className="justify-around w-[40%] h-[40%] container-row">
        <div className="items-center justify-center container-col">
          <p className="text-2xl font-bold">Filtros</p>
          <ul className="container-col">
            {uniqueCategories.map((category) => (
              <li key={category} className="p-2 m-2">
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h2 className="p-4 m-auto text-2xl text-center">
            Detalles de gastos por categoría
          </h2>
          <table className="w-[100%] border-2 border-gray-500 text-white">
            <thead className="text-white border-2 bg-turqo-800">
              <tr>
                <th className="table-expenses">Fecha</th>
                <th className="table-expenses">Categoría</th>
                <th className="table-expenses">Monto</th>
              </tr>
            </thead>
            <tbody>
              {expensesByMonth.map(
                ({ id, dayId, monthId, yearId, category, amount }) => (
                  <tr
                    key={id}
                    className="text-center bg-turqo-600 hover:bg-gray-500"
                  >
                    <td className="table-expenses">
                      {dayId}/{monthId}/{yearId}
                    </td>
                    <td className="table-expenses">{category}</td>
                    <td className="table-expenses">${amount}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

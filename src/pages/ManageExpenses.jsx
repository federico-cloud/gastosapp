import { useExpensesByMonth } from "../hooks";

export const ManageExpenses = ({ year, month }) => {
  const { expensesByMonth, loading, error } = useExpensesByMonth({
    year,
    month,
  });

  if (loading) return <p className="text-white">Cargando gastos...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const categoriasUnicas = [
    ...new Set(expensesByMonth.map((expense) => expense.category)),
  ];

  return (
    <div className="container w-full">
      <h2>Detalles de gastos por categoría</h2>
      <table className="w-[80%] border-2 border-gray-500 text-white">
        <thead className="text-white border-2 bg-turqo-800">
          <tr>
            <th className="p-2 border-2 border-black">Fecha</th>
            <th className="p-2 border-2 border-black">Categoría</th>
            <th className="p-2 border-2 border-black">Monto</th>
          </tr>
        </thead>
        <tbody>
          {expensesByMonth.map(
            ({ id, dayId, monthId, yearId, category, amount }) => (
              <tr
                key={id}
                className="text-center bg-turqo-600 hover:bg-gray-500"
              >
                <td className="p-2 border-2 border-black">
                  {dayId}/{monthId}/{yearId}
                </td>
                <td className="p-2 border-2 border-black">{category}</td>
                <td className="p-2 border-2 border-black">${amount}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export const TableMonthExpenses = ({ expensesByMonth, activeCategory }) => {
  // Filtrar los gastos por categoría si está seleccionada
  const filteredExpenses = activeCategory
    ? expensesByMonth.filter(({ category }) => category === activeCategory)
    : expensesByMonth;

  return (
    <table className="w-full h-auto text-white border-2 border-gray-500">
      {/* Encabezado de la tabla */}
      <thead className="text-white bg-purple-600 border-2">
        <tr>
          <th className="table-expenses">Fecha</th>
          <th className="table-expenses">Categoría</th>
          <th className="table-expenses">Monto</th>
        </tr>
      </thead>

      {/* Cuerpo de la tabla */}
      <tbody>
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map(
            ({ id, dayId, monthId, yearId, category, amount }) => (
              <tr
                key={id}
                className="text-center bg-purple-400 hover:bg-gray-700"
              >
                <td className="table-expenses">
                  {dayId}/{monthId}/{yearId}
                </td>
                <td className="table-expenses">{category}</td>
                <td className="table-expenses">${amount}</td>
              </tr>
            )
          )
        ) : (
          <tr>
            <td colSpan="3" className="p-4 text-center text-gray-400">
              No hay gastos registrados.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

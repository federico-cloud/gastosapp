import { Link } from "react-router-dom";

export const ManageExpenses = () => {
  const expenses = [
    { id: 1, name: "Compra en supermercado", category: "Super", amount: "$50" },
    { id: 2, name: "Gasolina", category: "automovil", amount: "$30" },
  ];

  return (
    <div className="p-4">
      <h1>Gestionar Gastos</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="p-2 my-2 border">
            <Link
              to={`/dashboard/manage-expenses/${expense.id}`}
            >
              <p>Detalle: {expense.name}</p>
              <p>Importe: {expense.amount}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

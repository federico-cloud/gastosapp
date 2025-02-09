import { MonthExpenses } from "../components";
import { useMonths } from "../hooks";
import { v4 as uuidv4 } from "uuid";

export const Home = () => {
  const { months, loading, error } = useMonths();
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  const monthsWithId = months.map((month) => ({
    ...month,
    tempId: uuidv4(),
  }));

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {monthsWithId.map(({ tempId, yearId, monthId, month, totalDays }) => (
        <MonthExpenses
          key={tempId}
          yearId={yearId}
          monthId={monthId}
          month={month}
          totalDays={totalDays}
        />
      ))}
    </div>
  );
};

import { MonthExpenses } from "../components";
import { useMonths } from "../hooks";

export const Home = () => {
  const { months, loading, error } = useMonths();
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  return (
    <>
      {months.map(({ id, month, totalDays }) => (
        <MonthExpenses key={id} month={month} totalDays={totalDays} />
      ))}
    </>
  );
};

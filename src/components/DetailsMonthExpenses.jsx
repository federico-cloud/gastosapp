import { useParams } from "react-router-dom";

export const DetailsMonthExpenses = () => {
  const { year, month } = useParams();


  return <h1 className="text-white">Detalles del Mes {month} y ano {year}</h1>;
};

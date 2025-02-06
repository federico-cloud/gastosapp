import { MonthExpenses } from "../components";
import { v4 as uuidv4 } from 'uuid';

export const Home = () => {
  const months = [
    {id: uuidv4(), month:"Enero"},
    {id: uuidv4(), month:"Febrero"},
    {id: uuidv4(), month:"Marzo"},
    {id: uuidv4(), month:"Abril"},
    {id: uuidv4(), month:"Mayo"},
    {id: uuidv4(), month:"Junio"},
    {id: uuidv4(), month:"Julio"},
    {id: uuidv4(), month:"Agosto"},
    {id: uuidv4(), month:"Septiembre"},
    {id: uuidv4(), month:"Octubre"},
    {id: uuidv4(), month:"Noviembre"},
    {id: uuidv4(), month:"Diciembre"},
  ];

  return (
    <>
      {months.map(({id, month}) => (
        <MonthExpenses key={id} month={month} />
      ))}
    </>
  );
};

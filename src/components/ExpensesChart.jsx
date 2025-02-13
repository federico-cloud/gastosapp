import { ChartAdapter } from "../adapters/ChartAdapter";

export const ExpensesChart = ({ data }) => {
  
  const groupedData = data.reduce((acc, { dayId, amount }) => {
    acc[dayId] = (acc[dayId] || 0) + amount;
    return acc;
  }, {});

  const formattedData = Object.entries(groupedData).map(([day, amount]) => ({
    dayId: Number(day),
    amount
  }));

  return <ChartAdapter data={formattedData} />;
};

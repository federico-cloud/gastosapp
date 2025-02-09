export const MonthExpenses = ({ id, month, totalDays }) => {
  return (
    <div key={id} className="w-1/3 p-4 m-4 bg-gray-100 rounded-lg shadow-md">
      {month} - {totalDays}
    </div>
  );
};

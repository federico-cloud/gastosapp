import { useEffect } from "react";

export const MonthExpenses = ({ index, month }) => {
  const year = 2024;

  return (
    <div className="flex flex-row bg-amber-100">
      <div
        key={index}
        className="w-1/3 inline-block bg-gray-100 p-4 m-4 rounded-lg shadow-md"
      >
        <h2>
          {month} {year}
        </h2>
      </div>
    </div>
  );
};

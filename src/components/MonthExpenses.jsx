import { NavLinkAdapter } from "../adapters";

export const MonthExpenses = ({ tempId, yearId, monthId, month, totalDays }) => {
  
  return (
    <NavLinkAdapter
      to={`view-expenses/${yearId}/${monthId}`}
      className="p-4 m-4 text-center bg-gray-100 rounded-lg shadow-md w-80 h-80"
    >
      <div key={tempId}>
        {month} {yearId}
      </div>
    </NavLinkAdapter>
  );
};

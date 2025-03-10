import { scaleTime, scaleLinear, max, line as d3_line } from "d3";

export const MultipleLineChartAdapter = ({ data }) => {
  // Datos formateados
  const formattedData = data.map(({ yearId, monthId, dayId, amount }) => ({
    date: new Date(yearId, monthId - 1, dayId),
    amount: amount,
  }));

  // Datos ordenados por fecha
  const sortedData = formattedData.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // Escala eje X
  let xScale = scaleTime()
    .domain([sortedData[0].date, sortedData[sortedData.length - 1].date])
    .range([10, 90]);

  // Escala eje Y
  let yScale = scaleLinear()
    .domain([0, max(sortedData.map(({ amount }) => amount)) ?? 0])
    .range([100, 0]);

  let line = d3_line()
    .x(({ date }) => xScale(date))
    .y(({ amount }) => yScale(amount));

  return (
    <div className="bg-purple-900 p-15">
      {/* Eje X */}
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {sortedData.map((data, i) => {
          if (data.amount === 0) return null;
          return (
            <g key={i}>
              <text
                key={i}
                x={xScale(data.date)}
                y="100"
                fontSize="2.5"
                fill="white"
                transform={`rotate(-45, ${xScale(data.date)}, 100)`}
                >
                {data.date.getDate()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

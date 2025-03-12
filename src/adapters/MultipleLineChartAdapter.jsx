// import {
//   scaleTime,
//   scaleLinear,
//   max,
//   line as d3_line,
//   curveMonotoneX,
// } from "d3";

export const MultipleLineChartAdapter = ({ categories }) => {

  return null

//   // Colores para cada categoría
//   const categoryColors = {
//     stroke: [
//       "stroke-violet-400",
//       "stroke-fuchsia-400",
//       "stroke-blue-400",
//       "stroke-green-400",
//       "stroke-yellow-400",
//     ],
//     dots: [
//       "text-violet-300",
//       "text-fuchsia-300",
//       "text-blue-300",
//       "text-green-300",
//       "text-yellow-300",
//     ],
//   };

//   // Procesar datos de todas las categorías
//   const processedCategories = categories.map((category) => {
//     const formattedData = category.expenses.map(
//       ({ yearId, monthId, dayId, amount }) => ({
//         date: new Date(yearId, monthId - 1, dayId),
//         amount: amount,
//       })
//     );

//     return {
//       name: category.name,
//       data: formattedData.sort((a, b) => new Date(a.date) - new Date(b.date)),
//     };
//   });

//   // Encontrar el rango de fechas global
//   const allDates = processedCategories.flatMap((cat) =>
//     cat.data.map((d) => d.date)
//   );
//   const startDate = new Date(Math.min(...allDates));
//   const endDate = new Date(Math.max(...allDates));

//   // Encontrar el máximo valor global
//   const maxAmount = Math.max(
//     ...processedCategories.flatMap((cat) => cat.data.map((d) => d.amount))
//   );

//   // Escalas
//   let xScale = scaleTime().domain([startDate, endDate]).range([10, 90]);

//   let yScale = scaleLinear().domain([0, maxAmount]).range([100, 0]);

//   let line = d3_line()
//     .x((d) => xScale(d.date))
//     .y((d) => yScale(d.amount))
//     .curve(curveMonotoneX);

//   return (
//     <div className="relative h-72 w-full">
//       {/* Y axis */}
//       <div
//         className="absolute inset-0
//             h-[calc(100%-var(--marginTop)-var(--marginBottom))]
//             w-[var(--marginLeft)]
//             translate-y-[var(--marginTop)]
//             overflow-visible"
//       >
//         {yScale
//           .ticks(8)
//           .map(yScale.tickFormat(8, "d"))
//           .map((amount, i) => (
//             <div
//               key={i}
//               style={{
//                 top: `${yScale(+amount)}%`,
//                 left: "0%",
//               }}
//               className="absolute text-xs tabular-nums -translate-y-1/2 text-gray-500 w-full text-right pr-2"
//             >
//               {amount}
//             </div>
//           ))}
//       </div>

//       {/* Chart area */}
//       <div
//         className="absolute inset-0
//             h-[calc(100%-var(--marginTop)-var(--marginBottom))]
//             w-[calc(100%-var(--marginLeft)-var(--marginRight))]
//             translate-x-[var(--marginLeft)]
//             translate-y-[var(--marginTop)]
//             overflow-visible
//           "
//       >
//         <svg
//           viewBox="0 0 100 100"
//           className="overflow-visible w-full h-full"
//           preserveAspectRatio="none"
//         >
//           {/* Grid lines */}
//           {yScale
//             .ticks(8)
//             .map(yScale.tickFormat(8, "d"))
//             .map((active, i) => (
//               <g
//                 transform={`translate(0,${yScale(+active)})`}
//                 className="text-zinc-300 dark:text-zinc-700"
//                 key={i}
//               >
//                 <line
//                   x1={0}
//                   x2={100}
//                   stroke="currentColor"
//                   strokeDasharray="6,5"
//                   strokeWidth={0.5}
//                   vectorEffect="non-scaling-stroke"
//                 />
//               </g>
//             ))}

//           {/* Lines y puntos para cada categoría */}
//           {processedCategories.map((category, categoryIndex) => (
//             <g key={category.name}>
//               {/* Línea de la categoría */}
//               <path
//                 d={line(category.data)}
//                 fill="none"
//                 className={
//                   categoryColors.stroke[
//                     categoryIndex % categoryColors.stroke.length
//                   ]
//                 }
//                 strokeWidth="2"
//                 vectorEffect="non-scaling-stroke"
//               />

//               {/* Puntos de la categoría */}
//               {category.data.map((d, index) => (
//                 <path
//                   key={index}
//                   d={`M ${xScale(d.date)} ${yScale(d.amount)} l 0.0001 0`}
//                   vectorEffect="non-scaling-stroke"
//                   strokeWidth="7"
//                   strokeLinecap="round"
//                   fill="none"
//                   stroke="currentColor"
//                   className={
//                     categoryColors.dots[
//                       categoryIndex % categoryColors.dots.length
//                     ]
//                   }
//                 />
//               ))}
//             </g>
//           ))}
//         </svg>

//         <div className="translate-y-2">
//           {/* X Axis */}
//           {processedCategories[0].data.map((day, i) => {
//             const isFirst = i === 0;
//             const isLast = i === processedCategories[0].data.length - 1;
//             if (!isFirst && !isLast) return null;

//             return (
//               <div key={i} className="overflow-visible text-zinc-500">
//                 <div
//                   style={{
//                     left: `${xScale(day.date)}%`,
//                     top: "100%",
//                     transform: `translateX(${isFirst ? "0%" : "-100%"})`,
//                   }}
//                   className="text-xs absolute"
//                 >
//                   {day.date.toLocaleDateString("en-US", {
//                     month: "numeric",
//                     day: "numeric",
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
};

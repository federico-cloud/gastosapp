import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";

// Grafico de linea
export const ChartAdapter = ({
  data,
  xKey = "dayId",
  yKey = "amount",
  color = "#8884d8",
}) => {
  return (
    <ResponsiveContainer width="40%" height="35%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey}></XAxis>
        <YAxis></YAxis>
        <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

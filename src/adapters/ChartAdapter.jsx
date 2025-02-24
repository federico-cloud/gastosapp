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
  color = "#f32a4f",
}) => {
  return (
    <ResponsiveContainer width="90%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey={xKey}></XAxis>
        <YAxis></YAxis>
        <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={5} />
      </LineChart>
    </ResponsiveContainer>
  );
};

import {
  CartesianGrid,
  Legend,
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
    <ResponsiveContainer width="90%" height="50%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 50, left: 50, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey}>
          <Label value="Dia" fontSize={25} position={"insideBottom"} offset={-20}/>
        </XAxis>
        <YAxis>
          <Label value="Monto" fontSize={25} angle={-90} position={"insideLeft"} offset={-25}/>
        </YAxis>
        <Tooltip />
        <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

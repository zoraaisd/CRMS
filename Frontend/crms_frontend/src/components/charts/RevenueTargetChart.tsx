import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CardContainer from "../common/CardContainer";
import SectionTitle from "../common/SectionTitle";

type RevenueTargetChartProps = {
  data: {
    name: string;
    achieved: number;
    target: number;
  }[];
};

export default function RevenueTargetChart({
  data,
}: RevenueTargetChartProps) {
  return (
    <CardContainer className="chart-card">
      <SectionTitle title="REVENUE TARGET - THIS YEAR" />

      <div className="chart-area">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="achieved" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContainer>
  );
}
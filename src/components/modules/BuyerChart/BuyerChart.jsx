import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { buyerData } from "../../../constant/chartData";

const RADIAN = Math.PI / 180;
const COLORS = ["#f97316", "#ffbb28", "#21a1fc"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "ends"}
      dominantBaseline="central"
    >{`${(percent * 100).toFixed(0)}%`}</text>
  );
};

const BuyerChart = () => {
  return (
    <div className="p-4 bg-white rounded-sm border border-gray-200 flex flex-col flex-1 md:flex-none md:w-[25rem] ">
      <strong className="text-gray-700 font-medium">Buyer Profile</strong>
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              data={buyerData}
              cx={"50%"}
              cy={"45%"}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value"
            >
              {buyerData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BuyerChart;

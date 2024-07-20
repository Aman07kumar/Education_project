import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import ExamDataContext from "../../../Context/ExamDataContext"; // Access context

const PassFailChart = () => {
  // Data from context
  const { passFailData } = useContext(ExamDataContext);

  const COLORS = ["#82ca9d", "#ff8042"];// Green for passed, red for failed

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180)); // Convert to radians
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  if (!passFailData) {
    return <div>Loading...</div>; // Show a loading message or spinner
  }


  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Pass/Fail Ratio</h3>
      <ResponsiveContainer width="100%" height={300}> 
        <PieChart>
          <Pie
            data={passFailData} // Use context data
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {passFailData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PassFailChart;

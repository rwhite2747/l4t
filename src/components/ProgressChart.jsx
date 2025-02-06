import React from "react";
import { Line } from "react-chartjs-2";

const ProgressChart = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: "Weight Lifted (lbs)",
        data: data.map((entry) => entry.weight),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ProgressChart;

import { useState } from "react";

export const useMockLineChartData = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const datasets = [
    {
      label: "Set 1",
      data: labels.map((_) => Math.random() * 100),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ];

  const data = {
    labels,
    datasets,
  };

  const [chartData, _] = useState(data);

  return chartData;
};


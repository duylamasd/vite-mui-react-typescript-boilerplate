import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

import { useMockLineChartData } from "./utils/hooks";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const chartData = useMockLineChartData();

  return (
    <>
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top" as const,
            },
            title: {
              display: true,
              text: "Chart.js Line Chart",
            },
            tooltip: {
              callbacks: {
                title: (items) => {
                  return items.map((item) => {
                    return item.label.toUpperCase();
                  });
                },
              },
            },
          },
        }}
        data={chartData}
      />

      <Bar
        options={{
          responsive: true,
          plugins: { legend: { position: "top" as const } },
        }}
        data={chartData}
      />
    </>
  );
};

export default App;


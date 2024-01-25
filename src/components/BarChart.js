import React from "react";
import Plot from "react-plotly.js";

const BarChart = ({ data }) => {
  const chartData = [
    {
      x: data.map((row) => row.firstname),
      y: data.map((row) => row.marks),
      type: "bar",
      marker: {
        color: "green",
      },
    },
  ];

  const layout = {
    width: 300,
    title: "Result",
    xaxis: {
      title: "Student's Name",
    },
    yaxis: {
      title: "Student's Marks",
    },
  };

  return (
    <div>
      <Plot data={chartData} layout={layout} config={{ displayModeBar: false }} />
    </div>
  );
};

export default BarChart;

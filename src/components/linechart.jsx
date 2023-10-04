import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Fees Collection",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
      {
        name: "Pending Fees",
        data: [2, 25, 25, 40, 60, 32, 80, 8, 50],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Fees Details",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ApexChart;

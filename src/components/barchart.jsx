import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar"],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: (val) => `${val}%`,
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Expenses 2002",
      data: [2.3, 3.1, 4.0],
    },
    {
      name: "Expenses 2003",
      data: [2.5, 3.0, 4.5],
    },
  ]);

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ApexChart;

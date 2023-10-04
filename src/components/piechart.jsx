import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3333/student").then((res) => {
      const stData = res.data;
      let female = 0;
      let male = 0;
      stData.forEach((ele) => {
        if (ele.gender === "Male") {
          male++;
        } else if (ele.gender === "Female") {
          female++;
        }
      });
      setSeries([male, female]);
    });
  }, []);
  const options = {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: true,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "bottom",
      offsetY: 0,
      height: 0,
    },
    labels: ["Male", "Female"],
  };

  return (
    <div>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={380}
          />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;

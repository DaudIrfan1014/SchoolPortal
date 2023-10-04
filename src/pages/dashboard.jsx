import React, { useEffect, useState } from "react";
import ApexChart from "../components/piechart";
import SideBar from "../components/sideBar";
import "./pages.css";
import axios from "axios";
import ApexChartLine from "../components/linechart";
import ApexChartBar from "../components/barchart";
const Dashboard = () => {
  const [Stlenght, setStlength] = useState(0);
  const [Tlenght, setTlength] = useState(0);
  const [Earning, setEarning] = useState(0);
  const [Expense, setExpense] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3333/student").then((res) => {
      setStlength(res.data.length);
      const totalFees = res.data.reduce(
        (acc, curr) => acc + Number(curr.Fees),
        0
      );
      setEarning(totalFees);
    });
    axios.get("http://localhost:3333/teacher").then((res) => {
      setTlength(res.data.length);
      const totalExpense = res.data.reduce(
        (acc, curr) => acc + Number(curr.salary),
        0
      );
      setExpense(totalExpense);
    });
  }, []);
  return (
    <>
      <section className="layout">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="body">
          <div>
            <h1 className="text-3xl m-10 text-bold">Admin Dashboard</h1>

            <div className="grid gap-4 grid-cols-4 grid-rows-1 m-5 text-center ">
              <span
                className="flex items-center justify-center space-x-3 p-10 mx-auto "
                style={{
                  boxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                  WebkitBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)  ",
                  MozBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                }}
              >
                <img
                  src="https://img.freepik.com/premium-photo/beautiful-anime-teacher-wearing-casual-clothes-wearing-lab-coat_944128-612.jpg"
                  alt="Student Image"
                  className="w-10 h-10 rounded-full"
                />

                <div className="border-l border-red-500 pl-3">
                  <h3>Students</h3>
                  <h3>{Stlenght}</h3>
                </div>
              </span>
              <span
                className="flex items-center justify-center space-x-3 p-10 mx-auto"
                style={{
                  boxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                  WebkitBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)  ",
                  MozBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                }}
              >
                <img
                  src="https://us.123rf.com/450wm/virtosmedia/virtosmedia2301/virtosmedia230118174/197248739-beautiful-woman-scientist-in-glasses-vector-illustration-on-dark-background.jpg"
                  alt="Student Image"
                  className="w-10 h-10 rounded-full"
                />

                <div className="border-l border-red-500 pl-3">
                  <h3>Teacher</h3>
                  <h3>{Tlenght}</h3>
                </div>
              </span>
              <span
                className="flex items-center justify-center space-x-3 p-10 mx-auto"
                style={{
                  boxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                  WebkitBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)  ",
                  MozBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                }}
              >
                <img
                  src="https://conceptdraw.com/a1714c3/p12/preview/640/pict--expenses-calculation-management-vector-stencils-library"
                  alt="Student Image"
                  className="w-10 h-10 rounded-full"
                />

                <div className="border-l border-red-500 pl-3">
                  <h3>Expenses</h3>
                  <h3>{Expense}</h3>
                </div>
              </span>
              <span
                className="flex items-center justify-center space-x-3 p-10 mx-auto"
                style={{
                  boxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                  WebkitBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)  ",
                  MozBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                }}
              >
                <img
                  src="https://thumbs.dreamstime.com/z/earning-icon-earning-icon-simple-vector-illustrations-192458302.jpg"
                  alt="Student Image"
                  className="w-10 h-10 rounded-full"
                />

                <div className="border-l border-red-500 pl-3">
                  <h3>Earning</h3>
                  <h3>{Earning}</h3>
                </div>
              </span>
            </div>

            <div className="grid gap-4 grid-cols-3 grid-rows-1   m-10 text-center">
              <div
                className="flex flex-col items-center justify-center"
                style={{
                  boxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                  WebkitBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)  ",
                  MozBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                  padding: "20px",
                }}
              >
                <ApexChartLine />
              </div>
              <div
                className="flex flex-col items-center justify-center"
                style={{
                  boxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                  WebkitBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)  ",
                  MozBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                  padding: "20px",
                }}
              >
                <ApexChartBar />
              </div>
              <div
                className="flex flex-col items-center justify-center"
                style={{
                  boxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                  WebkitBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)  ",
                  MozBoxShadow: "0px 0px 0px 4px rgba(0,0,0,0.75)",
                  padding: "20px",
                }}
              >
                <ApexChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

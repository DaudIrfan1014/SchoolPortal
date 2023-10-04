import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const UserDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    DOB: "",
    Age: "",
    phoneNO: "",
    Address: "",
    RollNo: "",
    Fees: 0,
    status: "",
    gender: "",
  });
  const [Text, Settext] = useState("");
  const Password = localStorage.getItem("userPassword");
  const userName = localStorage.getItem("userEmail");
  useEffect(() => {
    axios.get("http://localhost:3333/student").then((res) => {
      const users = res.data;
      const matchedUser = users.find(
        (user) => user.password === Password && user.email === userName
      );

      if (matchedUser) {
        setFormData(matchedUser);
      }
    });
  }, []);
  const handleChange = (e) => {
    Settext(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let Name = `${formData.firstname}${" "}${formData.lastname}`;
    axios
      .post("http://localhost:3333/comments", {
        name: Name,
        comments: Text,
      })
      .then((res) => {
        console.log("posted");
      });
    Settext("");
  };
  const handleLog = () => {
    localStorage.removeItem("GotoUser");
    navigate("/");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#15172b",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="backBody"
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "baseline",
          }}
        >
          <h1 style={{ fontSize: "50px", color: "white" }}>
            Sayyed Public High School
          </h1>
          <button
            style={{
              fontSize: "20px",
              color: "white",
              backgroundColor: "#333",
              border: "2px solid white",
              padding: "5px 15px",
              cursor: "pointer",
              alignSelf: "start",
            }}
            onClick={handleLog}
          >
            Logout
          </button>
        </div>
        <div
          style={{
            display: "flex",
            height: "80vh",
            width: "90vw",
            padding: "50px",
          }}
        >
          <div style={{ width: "50%" }}>
            {" "}
            <div style={{ display: "flex", gap: "20px" }}>
              {" "}
              <h1 style={{ fontSize: "60px", color: "white" }}>
                {formData.firstname}
              </h1>
              <h1 style={{ fontSize: "60px", color: "white" }}>
                {formData.lastname}
              </h1>
              <div style={{ width: "90px", border: "2px solid white" }}>
                <img
                  src="https://www.lmu.edu/media/2019lmu/gateways/noyce-18_1stYear%20(2).jpg"
                  alt=""
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <h2 style={{ fontSize: "25px", color: "white" }}>Email:</h2>
              <h3 style={{ fontSize: "25px", color: "white" }}>
                {formData.email}
              </h3>
            </div>
            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <h2 style={{ fontSize: "25px", color: "white" }}>Roll No:</h2>
              <h3 style={{ fontSize: "25px", color: "white" }}>
                {formData.RollNo}
              </h3>
            </div>
            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <h2 style={{ fontSize: "25px", color: "white" }}>Gender:</h2>
              <h3 style={{ fontSize: "25px", color: "white" }}>
                {formData.gender}
              </h3>
            </div>
            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <h2 style={{ fontSize: "25px", color: "white" }}>Address:</h2>
              <h3 style={{ fontSize: "25px", color: "white" }}>
                {formData.Address}
              </h3>
            </div>
            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <h2 style={{ fontSize: "25px", color: "white" }}>Phone No:</h2>
              <h3 style={{ fontSize: "25px", color: "white" }}>
                {formData.phoneNO}
              </h3>
            </div>
            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <h2 style={{ fontSize: "25px", color: "white" }}>
                Date of birth:
              </h2>
              <h3 style={{ fontSize: "25px", color: "white" }}>
                {formData.DOB}
              </h3>
            </div>
            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <h2 style={{ fontSize: "25px", color: "white" }}>Fees Amount:</h2>
              <h3 style={{ fontSize: "25px", color: "white" }}>
                {formData.Fees}
              </h3>
            </div>
            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <h2 style={{ fontSize: "25px", color: "white" }}>Fees:</h2>
              <h3 style={{ fontSize: "25px", color: "white" }}>
                {formData.status}
              </h3>
            </div>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <h1 style={{ fontSize: "25px", color: "white" }}>
                Leave your Suggestion and Compliants
              </h1>
              <textarea
                style={{ padding: "20px", marginTop: "50px" }}
                cols="45"
                rows="10"
                value={Text}
                onChange={handleChange}
                placeholder="Leave your suggestions and Complaints "
              ></textarea>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <button
                  style={{
                    fontSize: "20px",
                    color: "white",
                    border: "2px solid white",
                    padding: "5px 45px",
                  }}
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;

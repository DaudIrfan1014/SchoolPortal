import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Userlogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState([]);
  const [Password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3333/student").then((res) => {
      setUser(res.data);
    });
  }, []);
  const HandleUser = (e) => {
    setuserName(e.target.value);
  };
  const HandlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (let index = 0; index < user.length; index++) {
      if (Password == user[index].password && userName == user[index].email) {
        console.log(
          `Checking for ${user[index].email} and ${user[index].password}`
        );
        navigate("/userDetails");
        localStorage.setItem("GotoUser", true);
        localStorage.setItem("userEmail", userName);
        localStorage.setItem("userPassword", Password);
      }
    }
  };
  return (
    <div>
      <div className="containerr">
        <div className="loginn">
          <form>
            <h1>Student login</h1>
            <hr />
            <label>Email</label>
            <input
              className="input"
              type="text"
              onChange={HandleUser}
              placeholder="Email"
            />
            <label>Password</label>
            <div style={{ position: "relative", display: "inline-block" }}>
              <input
                className="input"
                type={showPassword ? "text" : "password"}
                onChange={HandlePassword}
                placeholder="Password"
                style={{ paddingRight: "30px" }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <button className="button" onClick={handleSubmit}>
              <span>Submit</span>
            </button>

            <p style={{ marginTop: "20px" }}>
              <Link to="/TeachLogin">Go to teacher login</Link>
            </p>
          </form>
        </div>
        <div className="pic">
          <img src="https://img.freepik.com/premium-vector/college-university-students-group-young-happy-people-standing-isolated-white-background-higher-academic-education-diverse-multicultural-meeting_575670-1435.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Userlogin;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Teachlogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState([]);
  const [Password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3333/teacher").then((res) => {
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
        navigate("/teachDetails");
        localStorage.setItem("Gototeach", true);
        localStorage.setItem("TeachEmail", userName);
        localStorage.setItem("TeachPassword", Password);
      }
    }
  };
  return (
    <div>
      <div className="containerr">
        <div className="loginn">
          <form>
            <h1>Teacher login</h1>
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
            <p>
              <a href="#">Forgot Password?</a>
            </p>
          </form>
        </div>
        <div className="pic">
          <img src="https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg?w=2000" />
        </div>
      </div>
    </div>
  );
};

export default Teachlogin;

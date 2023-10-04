import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    user: "Admin",
    password: "Admin",
  });
  useEffect(() => {}, []);
  const [Password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  const HandleUser = (e) => {
    setuserName(e.target.value);
  };
  const HandlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Password == user.password && userName == user.user) {
      localStorage.setItem("userEnter", true);
      navigate("/dashboard");
      console.log(user.password);
    } else {
      alert("username and password is incorrect");
    }
  };
  return (
    <div>
      <div className="containerr">
        <div className="loginn">
          <form>
            <h1>Admin Panel</h1>
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
          <img src="https://i.pinimg.com/736x/94/09/7e/94097e458fbb22184941be57aaab2c8f.jpg" />
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;

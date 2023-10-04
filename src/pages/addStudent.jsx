import React from "react";
import "./pages.css";
import SideBar from "../components/sideBar";
import axios from "axios";
const AddStudent = () => {
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
    status: "Not Paid",
    gender: "",
  });

  const HandleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const HandleSubmit = () => {
    axios.post("http://localhost:3333/student", { ...formData });
    setFormData({
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
      gender: "",
    });
  };
  return (
    <>
      <section className="layout">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="body">
          <div className="cont">
            <div className="form">
              <div className="title">
                <h1>Add Student Details</h1>
              </div>
              <div className="FormBox">
                <div className="div1">
                  {" "}
                  <div className="input-container ic1">
                    <input
                      name="firstname"
                      className="input"
                      type="text"
                      placeholder=" "
                      value={formData.firstname}
                      onChange={HandleChange}
                    />
                    <div className="cut"></div>
                    <label htmlFor="firstname" className="placeholder">
                      First name
                    </label>
                  </div>{" "}
                </div>
                <div className="div2">
                  {" "}
                  <div className="input-container ic1">
                    <input
                      name="lastname"
                      className="input"
                      type="text"
                      value={formData.lastname}
                      placeholder=" "
                      onChange={HandleChange}
                    />
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">
                      Last name
                    </label>
                  </div>{" "}
                </div>
                <div className="div3">
                  {" "}
                  <div className="input-container ic2">
                    <input
                      name="email"
                      className="input"
                      type="text"
                      value={formData.email}
                      placeholder=" "
                      onChange={HandleChange}
                    />
                    <div className="cut cut-short"></div>
                    <label htmlFor="lastname" className="placeholder">
                      Email
                    </label>
                  </div>{" "}
                </div>
                <div className="div4">
                  <div className="input-container ic2">
                    <input
                      name="password"
                      className="input"
                      type="text"
                      value={formData.password}
                      placeholder=" "
                      onChange={HandleChange}
                    />
                    <div className="cut "></div>
                    <label htmlFor="lastname" className="placeholder">
                      Password
                    </label>
                  </div>{" "}
                </div>
                <div className="div5">
                  <div className="input-container ic2">
                    <input
                      name="DOB"
                      className="input"
                      type="date"
                      value={formData.DOB}
                      placeholder=" "
                      onChange={HandleChange}
                    />
                    <div className="cut cut-short"></div>
                    <label for="lastname" className="placeholder">
                      DOB
                    </label>
                  </div>{" "}
                </div>
                <div className="div6">
                  <div className="input-container ic2">
                    <input
                      name="Age"
                      className="input"
                      type="text"
                      value={formData.Age}
                      placeholder=" "
                      onChange={HandleChange}
                    />
                    <div className="cut cut-short"></div>
                    <label for="lastname" className="placeholder">
                      Age
                    </label>
                  </div>{" "}
                </div>
                <div className="div7">
                  <div className="input-container ic2">
                    <input
                      name="phoneNO"
                      className="input"
                      type="text"
                      value={formData.phoneNO}
                      placeholder=" "
                      onChange={HandleChange}
                    />
                    <div className="cut "></div>
                    <label htmlFor="lastname" className="placeholder">
                      Phone No.
                    </label>
                  </div>{" "}
                </div>
                <div className="div8">
                  <div className="input-container ic2">
                    <input
                      name="Address"
                      className="input"
                      type="text"
                      value={formData.Address}
                      placeholder=" "
                      onChange={HandleChange}
                    />
                    <div className="cut "></div>
                    <label htmlFor="lastname" className="placeholder">
                      Address
                    </label>
                  </div>{" "}
                </div>
                <div className="div9">
                  {" "}
                  <div className="input-container ic2">
                    <input
                      name="RollNo"
                      value={formData.RollNo}
                      className="input"
                      type="text"
                      placeholder=" "
                      onChange={HandleChange}
                    />
                    <div className="cut "></div>
                    <label htmlFor="lastname" className="placeholder">
                      Roll No
                    </label>
                  </div>{" "}
                </div>
                <div className="div10">
                  {" "}
                  <div className="input-container ic2">
                    <input
                      name="Fees"
                      className="input"
                      type="number"
                      value={formData.Fees}
                      placeholder=" "
                      onChange={HandleChange}
                    />
                    <div className="cut "></div>
                    <label htmlFor="lastname" className="placeholder">
                      Fee Charged
                    </label>
                  </div>{" "}
                </div>

                <div className="div11">
                  <div className="input-container ic2">
                    <input
                      name="gender"
                      className="input"
                      type="text"
                      value={formData.gender}
                      placeholder=" "
                      onChange={HandleChange}
                      autoComplete="Male"
                    />
                    <div className="cut "></div>
                    <label htmlFor="lastname" className="placeholder">
                      Gender (Male/Female)
                    </label>
                  </div>{" "}
                </div>
              </div>
              <button onClick={HandleSubmit} className="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddStudent;

import React, { useEffect, useState } from "react";
import "./pages.css";
import SideBar from "../components/sideBar";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import FormDialog from "../components/EditStudent";
import FormDialogBox from "../components/EditTeacher";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [Tdata, setTData] = useState([]);
  const [show, setShow] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios.get("http://localhost:3333/student").then((res) => {
      setData(res.data);
    });

    axios.get("http://localhost:3333/teacher").then((res) => {
      setTData(res.data);
    });
  };

  const handleSearchChange = (e) => {
    // Handling search term change
    setSearchTerm(e.target.value);
  };
  const handleFalse = (e) => {
    e.preventDefault();
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const filteredStudents = data.filter((student) =>
    student.RollNo.includes(searchTerm)
  );
  const filteredTeachers = Tdata.filter((teacher) =>
    teacher.email.includes(searchTerm)
  );
  return (
    <>
      <section className="layout">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="body">
          <div className="cont">
            <div className="title">
              <h1>Search Student and Teachers</h1>
            </div>
            <form class="example">
              <input
                type="text"
                placeholder={show ? "Roll No.." : "Email.."}
                name="search2"
                value={searchTerm}
                onChange={handleSearchChange}
              />

              <button
                onClick={handleFalse}
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  width: "184px",
                }}
              >
                {show ? <p>Teacher Data</p> : <p>Student Data</p>}
              </button>
            </form>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>First Name</StyledTableCell>
                    <StyledTableCell>Last Name</StyledTableCell>
                    <StyledTableCell>
                      {show ? <p>Roll NO</p> : <p>Email</p>}
                    </StyledTableCell>
                    <StyledTableCell>View Details</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {show
                    ? filteredStudents.map((row) => (
                        <StyledTableRow key={row.firstname}>
                          <StyledTableCell component="th" scope="row">
                            {row.firstname}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.lastname}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.RollNo}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            <FormDialog currRow={row} refresh={fetchData} />
                          </StyledTableCell>
                        </StyledTableRow>
                      ))
                    : filteredTeachers.map((row) => (
                        <StyledTableRow key={row.firstname}>
                          <StyledTableCell component="th" scope="row">
                            {row.firstname}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.lastname}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.email}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            <FormDialogBox currRow={row} refresh={fetchData} />
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;

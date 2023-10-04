import React, { useState, useEffect } from "react";
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
const StatusTableCell = styled(TableCell)(({ feeStatus }) => ({
  backgroundColor: feeStatus === "Paid" ? "green" : "red",
  color: "white",
  fontWeight: "600c",
}));
const Salary = () => {
  const [Tdata, setTData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUnpaid, setShowUnpaid] = useState(false); // Add this state
  useEffect(() => {
    axios.get("http://localhost:3333/teacher").then((res) => {
      setTData(res.data);
    });
  }, []);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTeachers = Tdata.filter((Teachers) => {
    const matchesSearch = Teachers.email.includes(searchTerm);
    const matchesUnpaid = !showUnpaid || Teachers.status !== "Paid";
    return matchesSearch && matchesUnpaid;
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="layout">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="body">
          <div className="cont">
            <div className="title">
              <h1>Pending Salary Details</h1>
            </div>
            <form className="example" onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Email.."
                name="search2"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button
                type="button"
                style={{ width: "184px", fontSize: "15px" }}
                onClick={() => setShowUnpaid((prev) => !prev)}
              >
                {showUnpaid ? "Show All Teachers" : "Show Unpaid Only"}
              </button>
            </form>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>First Name</StyledTableCell>
                    <StyledTableCell>Last Name</StyledTableCell>
                    <StyledTableCell>Email ID</StyledTableCell>
                    <StyledTableCell>Salary</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredTeachers.map((row) => (
                    <StyledTableRow key={row.name}>
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
                        {row.salary}
                      </StyledTableCell>
                      <StatusTableCell
                        component="th"
                        scope="row"
                        feeStatus={row.status}
                      >
                        {row.status}
                      </StatusTableCell>
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

export default Salary;

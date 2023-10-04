import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstname: props.currRow.firstname,
    lastname: props.currRow.lastname,
    email: props.currRow.email,
    password: props.currRow.password,
    DOB: props.currRow.DOB,
    Age: props.currRow.Age,
    phoneNO: props.currRow.phoneNO,
    Address: props.currRow.Address,
    RollNo: props.currRow.RollNo,
    Fees: props.currRow.Fees,
    status: props.currRow.status,
    gender: props.currRow.gender,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSave = () => {
    console.log(props.currRow.id);
    axios
      .put(`http://localhost:3333/student/${props.currRow.id}`, { ...formData }) // assuming you have an ID for the student
      .then((response) => {
        console.log(response);
        handleClose();
        props.refresh();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Edit Details
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            First Edit your details than hit the Done to save the changes
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="firstname"
            onChange={handleChange}
            value={formData.firstname}
            label="First Name"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="lastname"
            onChange={handleChange}
            value={formData.lastname}
            label="Last Name"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="RollNo"
            onChange={handleChange}
            value={formData.RollNo}
            label="Roll No"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            onChange={handleChange}
            value={formData.email}
            label="Email"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="password"
            value={formData.password}
            label="Password"
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="phoneNO"
            onChange={handleChange}
            value={formData.phoneNO}
            label="Phone No"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            onChange={handleChange}
            name="Address"
            value={formData.Address}
            label="Address"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            onChange={handleChange}
            name="Age"
            value={formData.Age}
            label="Age"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="Fees"
            onChange={handleChange}
            value={formData.Fees}
            label="Fees"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={formData.DOB}
            name="DOB"
            onChange={handleChange}
            label="DoB"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            label="Gender"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="status"
            value={formData.status}
            label="Status"
            onChange={handleChange}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save Change
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

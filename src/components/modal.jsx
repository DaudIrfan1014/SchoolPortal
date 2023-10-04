import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "3px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function AccountModal() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    localStorage.removeItem("userEnter");
    navigate("/");
    setOpen(false);
  };

  return (
    <div>
      <Button style={{ color: "white" }} onClick={handleOpen}>
        Account
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <p id="modal-description">Do you want to log out?</p>
          <Link to="/">
            <Button
              style={{
                marginTop: "20px",
                color: "black",
                border: "1px solid black",
              }}
              onClick={handleClose}
            >
              Log Out
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}

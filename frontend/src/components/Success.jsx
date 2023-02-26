import { forwardRef, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Success = ({ type, message = "", setDisplaySuccess = () => {} }) => {
  const [open, setOpen] = useState(Boolean(true));

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;

    setOpen(Boolean(false));

    setDisplaySuccess({
      display: Boolean(false),
      type: "",
      message: "",
    });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={type === "addToCart" ? 1000 : 2500}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {type === "addToCart"
          ? `1 ${message.toLowerCase()} added to cart !`
          : `Your order is successfully created !`}
      </Alert>
    </Snackbar>
  );
};

export default Success;

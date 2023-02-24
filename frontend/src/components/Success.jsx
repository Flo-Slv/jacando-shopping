import { forwardRef, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Success = ({ name, setDisplayAddToCart }) => {
  const [open, setOpen] = useState(Boolean(true));

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;

    setOpen(Boolean(false));
    setDisplayAddToCart({
      display: Boolean(false),
      name: "",
    });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        1 {name} successfully added to cart !
      </Alert>
    </Snackbar>
  );
};

export default Success;

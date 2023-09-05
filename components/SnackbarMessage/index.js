import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

import useStyles from "./SnackbarMessageStyles";

function SnackbarMessage({ message, onClose, open }) {
  const classes = useStyles();

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      message={message}
      className={classes.successSnackbar}
    />
  );
}

export default SnackbarMessage;

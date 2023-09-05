import React from "react";
import Typography from "@material-ui/core/Typography";

import AddProductForm from "./AddProductForm";
import { mutationEdit } from "../../utils/queries";
import useStyles from "./ProductFormStyles";
import SnackbarMessage from "../SnackbarMessage";
import useMutation from "../../utils/hooks/useMutation";

function AddProduct() {
  const { successMessage, performMutation, closeSnackbar } = useMutation(
    mutationEdit
  );
  const classes = useStyles();

  const handleAddProduct = (productData) => {
    const variables = {
      input: productData,
    };

    performMutation(variables);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Add Product
      </Typography>
      <AddProductForm onAddProduct={handleAddProduct} />

      <SnackbarMessage
        open={!!successMessage}
        message={successMessage}
        onClose={closeSnackbar}
      />
    </div>
  );
}

export default AddProduct;

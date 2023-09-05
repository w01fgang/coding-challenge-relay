import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { mutationAdd } from "../../utils/queries";
import useMutation from "../../utils/hooks/useMutation";
import useStyles from "./EditProductStyles";
import SnackbarMessage from "../SnackbarMessage";

function EditProduct(props) {
  const { productId, initialData } = props;
  const { successMessage, performMutation, closeSnackbar } = useMutation(
    mutationAdd
  );
  const classes = useStyles();

  const [input, setInput] = useState({
    id: productId,
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (initialData) {
      setInput({
        id: initialData.id,
        name: initialData.name,
        description: initialData.description,
        price: initialData.price.toString(),
      });
    }
  }, [initialData]);

  const [changesMade, setChangesMade] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleEditProduct = () => {
    const variables = {
      input: {
        id: input.id,
        name: input.name,
        description: input.description,
        price: parseFloat(input.price),
        createdAt: new Date().toISOString(),
      },
    };

    if (
      input.name === initialData.name &&
      input.description === initialData.description &&
      +input.price === +initialData.price
    ) {
      setChangesMade(true);

      return;
    }
    performMutation(variables);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Edit Product
      </Typography>
      <form className={classes.form}>
        <TextField
          className={classes.input}
          label="Name"
          name="name"
          value={input.name}
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          className={classes.input}
          label="Description"
          name="description"
          value={input.description}
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          className={classes.input}
          label="Price"
          name="price"
          value={input.price}
          onChange={handleInputChange}
          type="number"
          variant="outlined"
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleEditProduct}
        >
          Save
        </Button>
        {changesMade && (
          <Typography variant="body2" color="error">
            To edit, please make changes to the fields.
          </Typography>
        )}
      </form>
      <SnackbarMessage
        open={!!successMessage}
        message={successMessage}
        onClose={closeSnackbar}
      />
    </div>
  );
}

export default EditProduct;

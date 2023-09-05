import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./ProductFormStyles";

function AddProductForm({ onAddProduct }) {
  const classes = useStyles();

  const [input, setInput] = useState({
    name: "",
    description: "",
    price: 0.0,
  });

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    description: false,
    price: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: false });
  };

  const handleAddProduct = () => {
    const errors = {};

    if (!input.name) {
      errors.name = true;
    }
    if (!input.description) {
      errors.description = true;
    }
    if (!input.price) {
      errors.price = true;
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors({});
      onAddProduct({
        name: input.name,
        description: input.description,
        price: parseFloat(input.price),
      });
    }
  };

  return (
    <form className={classes.form}>
      <TextField
        className={`${classes.input} ${validationErrors.name && classes.error}`}
        label="Name"
        name="name"
        value={input.name}
        onChange={handleInputChange}
        variant="outlined"
        required
        error={validationErrors.name}
      />
      <TextField
        className={`${classes.input} ${validationErrors.description &&
          classes.error}`}
        label="Description"
        name="description"
        value={input.description}
        onChange={handleInputChange}
        variant="outlined"
        required
        error={validationErrors.description}
      />
      <TextField
        className={`${classes.input} ${validationErrors.price &&
          classes.error}`}
        label="Price"
        name="price"
        value={input.price}
        onChange={handleInputChange}
        type="number"
        variant="outlined"
        required
        error={validationErrors.price}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleAddProduct}
      >
        {validationErrors.name ||
        validationErrors.description ||
        validationErrors.price
          ? "Please fill in all required fields."
          : "Add Product"}
      </Button>
    </form>
  );
}

export default AddProductForm;

import React, { useState } from "react";
import {
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useMutation } from "react-relay";
import useStyles from "./EditProductModalStyles";

function EditProductModal({ open, onClose, product }) {
  const classes = useStyles();
  const [newProduct, setNewProduct] = useState({ ...product });
  const [commitMutation, isMutationInFlight] = useMutation(
    graphql`
      mutation EditProductModal_indexEditMutation(
        $productId: ID!
        $input: ProductInput!
      ) {
        editProduct(productId: $productId, input: $input) {
          id
          name
          description
          price
          createdAt
          category
        }
      }
    `
  );

  const editProduct = (event) => {
    try {
      commitMutation({
        variables: {
          productId: product.id,
          input: {
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price,
            category: newProduct.category,
            price: Number(newProduct.price),
          },
        },
        onCompleted: (res) => {},
        onError: (error) => {
          console.error(error);
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const [formState, setFormState] = useState({ ...product });

  const inputHandler = (input, dataName) => {
    setFormState({ ...formState, [dataName]: input.target.value });
  };

  return (
    <Modal
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      open={open}
      onClose={onClose}
    >
      <Fade in={open}>
        <Box className={classes.modal}>
          <Typography className={classes.modalTitle}>Edit Product</Typography>
          <form className={classes.form} onSubmit={editProduct}>
          <TextField
            className={classes.input}
            key="name"
            value={newProduct.name}
            required
            onChange={(e) => inputHandler(e, "name")}
            label="Name"
          />
          <TextField
            className={classes.input}
            key="description"
            value={newProduct.description}
            required
            onChange={(e) => inputHandler(e, "description")}
            label="Description"
          />
          <TextField
            className={classes.input}
            key="price"
            type="number"
            value={newProduct.price}
            required
            onChange={(e) => inputHandler(e, "price")}
            label="Price"
          />
          <TextField
            className={classes.input}
            key="category"
            value={newProduct.category}
            required
            onChange={(e) => inputHandler(e, "category")}
            label="Category"
          />
            <Button
              className={classes.editButton}
              variant="contained"
              type="submit"
            >
              Edit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}

export default EditProductModal;
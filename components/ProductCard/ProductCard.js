import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
} from "@material-ui/core";
import useStyles from "./ProductCardStyles";

function ProductCard({ product, onEdit }) {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleEdit = () => {
    onEdit(editedProduct);
    handleModalClose();
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>{product.name}</Typography>
        <Typography className={classes.category}>
          Category: {product.category}
        </Typography>
        <Typography className={classes.price}>
          Price: ${product.price.toFixed(2)}
        </Typography>
        <Typography className={classes.description}>
          {product.description}
        </Typography>
        <Typography className={classes.createdAt}>
          Created At: {new Date(product.createdAt).toLocaleDateString()}
        </Typography>
        <Button
          className={classes.editButton}
          onClick={handleModalOpen}
          variant="contained"
        >
          Edit Product
        </Button>

        <Modal
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          open={modalOpen}
          onClose={handleModalClose}
        >
          <Fade in={modalOpen}>
            <Box className={classes.modal}>
              <Typography className={classes.modalTitle}>Edit Product</Typography>
              <TextField
                value={editedProduct.name}
                required
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, name: e.target.value })
                }
                label="Name"
              />
              <TextField
                value={editedProduct.description}
                required
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    description: e.target.value,
                  })
                }
                label="Description"
              />
              <TextField
                type="number"
                value={editedProduct.price}
                required
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, price: e.target.value })
                }
                label="Price"
              />
              <TextField
                value={editedProduct.category}
                required
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    category: e.target.value,
                  })
                }
                label="Category"
              />
              <Button
                className={classes.editButton}
                variant="contained"
                onClick={handleEdit}
              >
                Edit
              </Button>
            </Box>
          </Fade>
        </Modal>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

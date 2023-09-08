import React, { useState } from "react";
import { graphql, useMutation } from "react-relay";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProductCard from "../components/ProductCard/ProductCard";
import EditProductModal from "../components/EditProductModal/EditProductModal";
import {
  Backdrop,
  Modal,
  Fade,
  TextField,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
  },
  addButton: {
    backgroundColor: "blue",
    color: "white",
    margin: "20px auto",
    display: "block",
    "&:hover": {
      backgroundColor: "darkblue",
    },
  },
  pageTitle: {
    textAlign: "center",
    marginBottom: "20px",
  },
  productContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
  },
  modal: {
    padding: "15px",
    backgroundColor: "white",
    margin: "140px auto",
    width: "400px",
  },
  modalTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gridGap: "16px",
  },
}));

type Props = {
  ...pages_indexQueryResponse,
};

function Index(props: Props) {
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});
  const classes = useStyles();

  const [commitMutation] = useMutation(
    graphql`
      mutation pages_indexMutation($input: ProductInput!) {
        addProduct(input: $input) {
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

  const addNewProduct = (event) => {
    try {
      commitMutation({
        variables: {
          input: {
            ...product,
            price: Number(product.price),
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

    setModal(false);
  };

  const inputHandler = (e, dataName) => {
    setProduct({ ...product, [dataName]: e.target.value });
  };

  return (
    <Box className={classes.root}>
      <Button
        className={classes.addButton}
        onClick={() => setModal(true)}
        variant="contained"
      >
        Add new Product
      </Button>
      <Typography variant="h1" className={classes.pageTitle}>
        Products
      </Typography>
      <Box className={classes.productContainer}>
        {props.viewer.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={() => {
              console.log("Edit product clicked:", product);
            }}
          />
        ))}
      </Box>

      <Modal
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        open={modal}
        onClose={() => setModal(false)}
      >
        <Fade in={modal}>
          <Box className={classes.modal}>
            <Typography gutterBottom variant="h3">
              Create Products
            </Typography>
            <form onSubmit={addNewProduct}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gridGap={20}
                fontSize={18}
              >
                <TextField
                  required
                  onChange={(e) => inputHandler(e, "name")}
                  label="name"
                />
                <TextField
                  required
                  onChange={(e) => inputHandler(e, "description")}
                  label="description"
                />
                <TextField
                  type="number"
                  required
                  onChange={(e) => inputHandler(e, "price")}
                  label="price"
                />
                <TextField
                  required
                  onChange={(e) => inputHandler(e, "category")}
                  label="category"
                />
                <Button variant="contained" type="submit">
                  Create
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>

      <EditProductModal />

    </Box>
  );
}

Index.query = graphql`
  query pages_indexQuery {
    viewer {
      products {
        id
        name
        description
        price
        createdAt
        category
      }
    }
  }
`;

export default Index;

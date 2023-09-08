// @flow
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  makeStyles,
} from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { useState } from "react"
import { graphql, useMutation } from "react-relay"
import theme from "../lib/theme"

const useStyles = makeStyles({
  root: {
    margin: 20,
    [theme.breakpoints.up("sm")]: {
      maxWidth: 400,
      flex: "1 1 30%",
    },
  },

  modal: {
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      padding: 100,
    },
    backgroundColor: 'white',
    margin: '140px auto',
    width: 'max-content'
  }

})

function ProductCard({ product }: { product: $FlowFixMe }) {
  const [modal, setModal] = useState(false)
  const [newProduct, setNewProduct] = useState({ ...product })
  const classes = useStyles()
  const [commitMutation, isMutationInFlight] = useMutation(
    graphql`
      mutation ProductCard_indexEditMutation(
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
  )

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
          console.error(error)
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  const inputHandler = (input, dataName) => {
    setNewProduct({ ...newProduct, [dataName]: input.target.value })
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          Category: {product.category}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Price: ${product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography
          gutterBottom
          variant="caption"
          color="textSecondary"
          display="block"
        >
          Created At: {new Date(product.createdAt).toLocaleDateString()}
        </Typography>
        <Button onClick={() => setModal(true)} variant="contained">
          Edit Product
        </Button>

        <Modal
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          open={modal}
          onClose={() => setModal(false)}
        >
          <Fade in={modal}>
              <Box
                className={classes.modal}
              >
                <Typography gutterBottom variant="h3">
                  Edit Products
                </Typography>
                <form onSubmit={editProduct}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    gridGap={20}
                    fontSize={18}
                  >
                    <TextField
                      value={newProduct.name}
                      required
                      onChange={(e) => inputHandler(e, "name")}
                      label="name"
                    />
                    <TextField
                      value={newProduct.description}
                      required
                      onChange={(e) => inputHandler(e, "description")}
                      label="description"
                    />
                    <TextField
                      value={newProduct.price}
                      type="number"
                      required
                      onChange={(e) => inputHandler(e, "price")}
                      label="price"
                    />
                    <TextField
                      value={newProduct.category}
                      required
                      onChange={(e) => inputHandler(e, "category")}
                      label="category"
                    />
                    <Button variant="contained" type="submit">
                      Edit
                    </Button>
                  </Box>
                </form>
              </Box>
          </Fade>
        </Modal>
      </CardContent>
    </Card>
  )
}

export default ProductCard

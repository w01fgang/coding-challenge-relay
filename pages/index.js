// @flow
import React, { Component, useState } from "react"
import { ConnectionHandler, graphql, useMutation } from "react-relay"
import type { pages_indexQueryResponse } from "../__generated__/pages_indexQuery.graphql"

import Card from "@material-ui/core/Card"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import ProductCard from "../components/ProductCard"
import {
  Backdrop,
  Button,
  Fade,
  FormGroup,
  Input,
  Modal,
  TextField,
  makeStyles,
} from "@material-ui/core"
import theme from "../lib/theme"

type Props = {
  ...pages_indexQueryResponse,
}

const useStyles = makeStyles({
  modal: {
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      padding: 100,
    },
    backgroundColor: "white",
    margin: "140px auto",
    width: "max-content",
  },
})

function Index(props: Props) {
  const [modal, setModal] = useState(false)
  const [product, setProduct] = useState({})
  const classes = useStyles()

  const [commitMutation, isMutationInFlight] = useMutation(
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
  )

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
          console.error(error)
        },
      })
    } catch (error) {
      console.error(error)
    }

    // console.log(product, "newProduct")
    setModal(false)
  }

  const inputHandler = (input, dataName) => {
    setProduct({ ...product, [dataName]: input.target.value })
  }

  return (
    <Box>
      <Button onClick={() => setModal(true)} variant="contained">
        Add new Product
      </Button>
      <Box display="flex" alignItems="center" justifyContent="center" m={4}>
        <Typography variant="h1">Products</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap">
        {props.viewer.products.map((product) => (
          <ProductCard key={product.id} product={product} />
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
    </Box>
  )
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
`

export default Index

// @flow
import React, { Component } from 'react';
import { graphql } from 'react-relay';
import type { pages_indexQueryResponse } from '../__generated__/pages_indexQuery.graphql';

import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ProductCard from "../components/ProductCard";

type Props = {
  ...pages_indexQueryResponse;
};

function Index(props: Props) {
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center" m={4}>
        <Typography variant="h1">Products</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap">
        {props.viewer.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
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
      }
    }
  }
`;

export default Index;

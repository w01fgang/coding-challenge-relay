// @flow
import React, { Component } from 'react';
import { graphql } from 'react-relay';
import type { pages_indexQueryResponse } from '../__generated__/pages_indexQuery.graphql';

import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProductCard from '../components/ProductCard';

type Props = {
  ...pages_indexQueryResponse,
};

function Index(props: Props) {
  return (
    <Box m={'0px auto'} p={'20px'} maxWidth='1200px'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Typography variant='h1'>Products</Typography>
        <Button
          variant='contained'
          style={{
            marginTop: '20px',
            color: '#fff',
            width: '200px',
            fontWeight: '600',
            background: 'rgb(57 101 125)',
          }}
          variant='contained'
          href='/create'
        >
          Add Product
        </Button>
      </Box>

      <Box display='flex' flexWrap='wrap' justifyContent='center'>
        {props.viewer.products.map((product) => (
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

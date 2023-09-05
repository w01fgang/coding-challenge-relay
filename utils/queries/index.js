import { graphql } from "react-relay";

export const getAllProductsQuery = `
  query {
    viewer {
      products {
        id
        name
        price 
        description
        createdAt
      }
    }
  }
`;

export const editProductQuery = graphql`
  query EditProductPageQuery($id: ID!) {
    product(id: $id) {
      id
      name
      description
      price
      createdAt
    }
  }
`;

export const mutationEdit = graphql`
  mutation AddProductMutation($input: AddProductInput!) {
    addProduct(input: $input) {
      product {
        id
        name
        description
        price
        createdAt
      }
    }
  }
`;

export const mutationAdd = graphql`
  mutation EditProductMutation($input: EditProductInput!) {
    editProduct(input: $input) {
      product {
        id
        name
        description
        price
        createdAt
      }
    }
  }
`;

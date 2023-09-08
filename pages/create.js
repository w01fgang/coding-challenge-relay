import React from "react";
import ProductCard from "../components/ProductCard";
import { graphql } from "react-relay";
import Index from "./index";
import type { pages_indexQueryResponse } from "../__generated__/pages_indexQuery.graphql";
import { mock } from "../mock";
import FormCreate from "../components/FormCreate";

type Props = {
  ...pages_indexQueryResponse,
};

const ListOfProduct = (props: Props) => {
  return (
    <>
      <FormCreate />
    </>
  );
};

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

export default ListOfProduct;

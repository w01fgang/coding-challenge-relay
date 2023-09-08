import { commitMutation, graphql } from "react-relay";

const mutation = graphql`
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

function commit(environment, input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: { input },
    onCompleted,
    onError,
  });
}

export default { commit };

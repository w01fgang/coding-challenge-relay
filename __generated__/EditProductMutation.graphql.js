/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditProductInput = {|
  id: string,
  name: string,
  description: string,
  price: number,
  createdAt?: ?string,
|};
export type EditProductMutationVariables = {|
  input: EditProductInput
|};
export type EditProductMutationResponse = {|
  +editProduct: ?{|
    +product: ?{|
      +id: string,
      +name: string,
      +description: string,
      +price: number,
      +createdAt: string,
    |}
  |}
|};
export type EditProductMutation = {|
  variables: EditProductMutationVariables,
  response: EditProductMutationResponse,
|};
*/


/*
mutation EditProductMutation(
  $input: EditProductInput!
) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "EditProductPayload",
    "kind": "LinkedField",
    "name": "editProduct",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "product",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "edcae6b281bc9650361ea21bfa048a65",
    "id": null,
    "metadata": {},
    "name": "EditProductMutation",
    "operationKind": "mutation",
    "text": "mutation EditProductMutation(\n  $input: EditProductInput!\n) {\n  editProduct(input: $input) {\n    product {\n      id\n      name\n      description\n      price\n      createdAt\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c3c49c19277c892aded6a3c0cc29e2e';

module.exports = node;

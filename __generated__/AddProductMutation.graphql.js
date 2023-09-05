/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddProductInput = {|
  name: string,
  description: string,
  price: number,
|};
export type AddProductMutationVariables = {|
  input: AddProductInput
|};
export type AddProductMutationResponse = {|
  +addProduct: ?{|
    +product: ?{|
      +id: string,
      +name: string,
      +description: string,
      +price: number,
      +createdAt: string,
    |}
  |}
|};
export type AddProductMutation = {|
  variables: AddProductMutationVariables,
  response: AddProductMutationResponse,
|};
*/


/*
mutation AddProductMutation(
  $input: AddProductInput!
) {
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
    "concreteType": "AddProductPayload",
    "kind": "LinkedField",
    "name": "addProduct",
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
    "name": "AddProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e6dd994ce05a9c52dfaac982050b3c47",
    "id": null,
    "metadata": {},
    "name": "AddProductMutation",
    "operationKind": "mutation",
    "text": "mutation AddProductMutation(\n  $input: AddProductInput!\n) {\n  addProduct(input: $input) {\n    product {\n      id\n      name\n      description\n      price\n      createdAt\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '40c188968a5f0e4f6dc8d4e60fa0ca12';

module.exports = node;

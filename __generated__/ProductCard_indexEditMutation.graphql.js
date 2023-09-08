/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductInput = {|
  name?: ?string,
  description?: ?string,
  price?: ?number,
  category?: ?string,
|};
export type ProductCard_indexEditMutationVariables = {|
  productId: string,
  input: ProductInput,
|};
export type ProductCard_indexEditMutationResponse = {|
  +editProduct: ?{|
    +id: string,
    +name: string,
    +description: string,
    +price: number,
    +createdAt: string,
    +category: string,
  |}
|};
export type ProductCard_indexEditMutation = {|
  variables: ProductCard_indexEditMutationVariables,
  response: ProductCard_indexEditMutationResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "productId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "productId",
        "variableName": "productId"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "editProduct",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "category",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductCard_indexEditMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ProductCard_indexEditMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d8141508eceee74746863ea4af69dd9b",
    "id": null,
    "metadata": {},
    "name": "ProductCard_indexEditMutation",
    "operationKind": "mutation",
    "text": "mutation ProductCard_indexEditMutation(\n  $productId: ID!\n  $input: ProductInput!\n) {\n  editProduct(productId: $productId, input: $input) {\n    id\n    name\n    description\n    price\n    createdAt\n    category\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f63f8412e7e4fd7745380bfe5e14889';

module.exports = node;

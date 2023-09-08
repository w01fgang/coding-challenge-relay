/**
 * @generated SignedSource<<8d971ebe9eb1c8db06f47d667709a323>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
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
    "name": "EditProductModal_indexEditMutation",
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
    "name": "EditProductModal_indexEditMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "29f4e33c388c29310802a3f97056ddb1",
    "id": null,
    "metadata": {},
    "name": "EditProductModal_indexEditMutation",
    "operationKind": "mutation",
    "text": "mutation EditProductModal_indexEditMutation(\n  $productId: ID!\n  $input: ProductInput!\n) {\n  editProduct(productId: $productId, input: $input) {\n    id\n    name\n    description\n    price\n    createdAt\n    category\n  }\n}\n"
  }
};
})();

node.hash = "ae5cc0538c7a9253a4467aca5e908567";

module.exports = node;

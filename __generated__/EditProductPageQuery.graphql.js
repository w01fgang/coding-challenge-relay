/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditProductPageQueryVariables = {|
  id: string
|};
export type EditProductPageQueryResponse = {|
  +product: ?{|
    +id: string,
    +name: string,
    +description: string,
    +price: number,
    +createdAt: string,
  |}
|};
export type EditProductPageQuery = {|
  variables: EditProductPageQueryVariables,
  response: EditProductPageQueryResponse,
|};
*/


/*
query EditProductPageQuery(
  $id: ID!
) {
  product(id: $id) {
    id
    name
    description
    price
    createdAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditProductPageQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditProductPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6b657e252e41ea6ae2933144fb583802",
    "id": null,
    "metadata": {},
    "name": "EditProductPageQuery",
    "operationKind": "query",
    "text": "query EditProductPageQuery(\n  $id: ID!\n) {\n  product(id: $id) {\n    id\n    name\n    description\n    price\n    createdAt\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df63527157680c5f056d84e5a11ece67';

module.exports = node;

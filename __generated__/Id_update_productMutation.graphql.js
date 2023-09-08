/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Id_update_productMutationVariables = {|
  id: string,
  name: string,
  description: string,
  price: number,
|};
export type Id_update_productMutationResponse = {|
  +updateProduct: {|
    +name: string,
    +description: string,
    +price: number,
  |}
|};
export type Id_update_productMutation = {|
  variables: Id_update_productMutationVariables,
  response: Id_update_productMutationResponse,
|};
*/


/*
mutation Id_update_productMutation(
  $id: ID!
  $name: String!
  $description: String!
  $price: Float!
) {
  updateProduct(input: {id: $id, name: $name, description: $description, price: $price}) {
    name
    description
    price
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "price"
},
v4 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "price",
        "variableName": "price"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Id_update_productMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "updateProduct",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "Id_update_productMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "updateProduct",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3a0e3d46aa9cd5d987350263b248f24a",
    "id": null,
    "metadata": {},
    "name": "Id_update_productMutation",
    "operationKind": "mutation",
    "text": "mutation Id_update_productMutation(\n  $id: ID!\n  $name: String!\n  $description: String!\n  $price: Float!\n) {\n  updateProduct(input: {id: $id, name: $name, description: $description, price: $price}) {\n    name\n    description\n    price\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8c0d4953f1408873cee78c2362bab90d';

module.exports = node;

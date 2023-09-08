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
export type pages_indexMutationVariables = {|
  input: ProductInput
|};
export type pages_indexMutationResponse = {|
  +addProduct: ?{|
    +id: string,
    +name: string,
    +description: string,
    +price: number,
    +createdAt: string,
    +category: string,
  |}
|};
export type pages_indexMutation = {|
  variables: pages_indexMutationVariables,
  response: pages_indexMutationResponse,
|};
*/


/*
mutation pages_indexMutation(
  $input: ProductInput!
) {
  addProduct(input: $input) {
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
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "addProduct",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_indexMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pages_indexMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e30540d6d97454bd42fc70a956b91a22",
    "id": null,
    "metadata": {},
    "name": "pages_indexMutation",
    "operationKind": "mutation",
    "text": "mutation pages_indexMutation(\n  $input: ProductInput!\n) {\n  addProduct(input: $input) {\n    id\n    name\n    description\n    price\n    createdAt\n    category\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '965f3a8fb29143f8aeaec8fa820a2d5c';

module.exports = node;

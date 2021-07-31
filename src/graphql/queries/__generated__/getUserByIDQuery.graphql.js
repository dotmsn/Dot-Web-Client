/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type getUserByIDQueryVariables = {|
  id: string
|};
export type getUserByIDQueryResponse = {|
  +getUserByID: {|
    +_id: string,
    +bio: ?string,
    +displayName: string,
    +publicKey: string,
  |}
|};
export type getUserByIDQuery = {|
  variables: getUserByIDQueryVariables,
  response: getUserByIDQueryResponse,
|};
*/


/*
query getUserByIDQuery(
  $id: String!
) {
  getUserByID(id: $id) {
    _id
    bio
    displayName
    publicKey
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
    "concreteType": "PublicProfile",
    "kind": "LinkedField",
    "name": "getUserByID",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bio",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "publicKey",
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
    "name": "getUserByIDQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getUserByIDQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b9c640c1b1fb3e0671e2e086dc8f2197",
    "id": null,
    "metadata": {},
    "name": "getUserByIDQuery",
    "operationKind": "query",
    "text": "query getUserByIDQuery(\n  $id: String!\n) {\n  getUserByID(id: $id) {\n    _id\n    bio\n    displayName\n    publicKey\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '778e922f9dc96d45d67aacc1da31accf';

module.exports = node;

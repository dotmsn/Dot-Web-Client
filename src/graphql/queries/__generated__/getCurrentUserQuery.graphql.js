/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type getCurrentUserQueryVariables = {||};
export type getCurrentUserQueryResponse = {|
  +getCurrentUser: {|
    +_id: string,
    +bio: ?string,
    +displayName: string,
    +email: string,
    +privateKey: string,
  |}
|};
export type getCurrentUserQuery = {|
  variables: getCurrentUserQueryVariables,
  response: getCurrentUserQueryResponse,
|};
*/


/*
query getCurrentUserQuery {
  getCurrentUser {
    _id
    bio
    displayName
    email
    privateKey
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "getCurrentUser",
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "privateKey",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getCurrentUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getCurrentUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "375678bc50983025ab9a39c783e95df2",
    "id": null,
    "metadata": {},
    "name": "getCurrentUserQuery",
    "operationKind": "query",
    "text": "query getCurrentUserQuery {\n  getCurrentUser {\n    _id\n    bio\n    displayName\n    email\n    privateKey\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4fab6bd50106e1ded357a904c5510294';

module.exports = node;

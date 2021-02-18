/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fetchUserQueryVariables = {|
  username: string
|};
export type fetchUserQueryResponse = {|
  +fetchUser: {|
    +_id: string,
    +username: string,
    +displayname: ?string,
    +bio: ?string,
  |}
|};
export type fetchUserQuery = {|
  variables: fetchUserQueryVariables,
  response: fetchUserQueryResponse,
|};
*/


/*
query fetchUserQuery(
  $username: String!
) {
  fetchUser(username: $username) {
    _id
    username
    displayname
    bio
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "username"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "fetchUser",
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
        "name": "username",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayname",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bio",
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
    "name": "fetchUserQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "fetchUserQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "00013c0412101821dd43687bb1a21218",
    "id": null,
    "metadata": {},
    "name": "fetchUserQuery",
    "operationKind": "query",
    "text": "query fetchUserQuery(\n  $username: String!\n) {\n  fetchUser(username: $username) {\n    _id\n    username\n    displayname\n    bio\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dfaeae9c10ab010d7615554dd98955cb';

module.exports = node;

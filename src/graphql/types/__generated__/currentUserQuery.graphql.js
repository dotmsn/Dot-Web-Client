/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type currentUserQueryVariables = {||};
export type currentUserQueryResponse = {|
  +currentUser: {|
    +_id: string,
    +username: string,
    +confirmed: boolean,
  |}
|};
export type currentUserQuery = {|
  variables: currentUserQueryVariables,
  response: currentUserQueryResponse,
|};
*/


/*
query currentUserQuery {
  currentUser {
    _id
    username
    confirmed
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
    "name": "currentUser",
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
        "name": "confirmed",
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
    "name": "currentUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "currentUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e9cfcabe24a2a6e09ead40088edcff23",
    "id": null,
    "metadata": {},
    "name": "currentUserQuery",
    "operationKind": "query",
    "text": "query currentUserQuery {\n  currentUser {\n    _id\n    username\n    confirmed\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '154a45a19440da5658827b577e5d520c';

module.exports = node;

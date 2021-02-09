/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type getCurrentUserQueryVariables = {||};
export type getCurrentUserQueryResponse = {|
  +currentUser: {|
    +_id: string,
    +username: string,
  |}
|};
export type getCurrentUserQuery = {|
  variables: getCurrentUserQueryVariables,
  response: getCurrentUserQueryResponse,
|};
*/


/*
query getCurrentUserQuery {
  currentUser {
    _id
    username
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
    "cacheID": "36de09628571a66d226312ae9fc03c3a",
    "id": null,
    "metadata": {},
    "name": "getCurrentUserQuery",
    "operationKind": "query",
    "text": "query getCurrentUserQuery {\n  currentUser {\n    _id\n    username\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '64d047cb8ee8b312d3434dd370ae2d57';

module.exports = node;

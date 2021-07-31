/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type incomingFriendRequestsQueryVariables = {||};
export type incomingFriendRequestsQueryResponse = {|
  +incomingFriendRequests: $ReadOnlyArray<{|
    +_id: string,
    +from: string,
    +to: string,
  |}>
|};
export type incomingFriendRequestsQuery = {|
  variables: incomingFriendRequestsQueryVariables,
  response: incomingFriendRequestsQueryResponse,
|};
*/


/*
query incomingFriendRequestsQuery {
  incomingFriendRequests {
    _id
    from
    to
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "FriendRequest",
    "kind": "LinkedField",
    "name": "incomingFriendRequests",
    "plural": true,
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
        "name": "from",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "to",
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
    "name": "incomingFriendRequestsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "incomingFriendRequestsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a0aa857fba651abda6bb0aa2ddd1ab98",
    "id": null,
    "metadata": {},
    "name": "incomingFriendRequestsQuery",
    "operationKind": "query",
    "text": "query incomingFriendRequestsQuery {\n  incomingFriendRequests {\n    _id\n    from\n    to\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cc6a3b42682861c81e4203d76005180a';

module.exports = node;

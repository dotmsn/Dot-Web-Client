/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type outgoingFriendRequestsQueryVariables = {||};
export type outgoingFriendRequestsQueryResponse = {|
  +outgoingFriendRequests: $ReadOnlyArray<{|
    +_id: string,
    +from: string,
    +to: string,
  |}>
|};
export type outgoingFriendRequestsQuery = {|
  variables: outgoingFriendRequestsQueryVariables,
  response: outgoingFriendRequestsQueryResponse,
|};
*/


/*
query outgoingFriendRequestsQuery {
  outgoingFriendRequests {
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
    "name": "outgoingFriendRequests",
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
    "name": "outgoingFriendRequestsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "outgoingFriendRequestsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5631aca7b6936d005cd36a774e5d5e63",
    "id": null,
    "metadata": {},
    "name": "outgoingFriendRequestsQuery",
    "operationKind": "query",
    "text": "query outgoingFriendRequestsQuery {\n  outgoingFriendRequests {\n    _id\n    from\n    to\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '29d34d1fecf15abf1129514003985534';

module.exports = node;

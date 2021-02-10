/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type listChannelsQueryVariables = {||};
export type listChannelsQueryResponse = {|
  +listChannels: $ReadOnlyArray<{|
    +_id: string,
    +participants: $ReadOnlyArray<{|
      +_id: string,
      +username: string,
    |}>,
  |}>
|};
export type listChannelsQuery = {|
  variables: listChannelsQueryVariables,
  response: listChannelsQueryResponse,
|};
*/


/*
query listChannelsQuery {
  listChannels {
    _id
    participants {
      _id
      username
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Channel",
    "kind": "LinkedField",
    "name": "listChannels",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "participants",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "listChannelsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "listChannelsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "36468deaecab717680fbb2329ef38d44",
    "id": null,
    "metadata": {},
    "name": "listChannelsQuery",
    "operationKind": "query",
    "text": "query listChannelsQuery {\n  listChannels {\n    _id\n    participants {\n      _id\n      username\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd44ef2bb82ba5dea39b27495a43cd3a2';

module.exports = node;

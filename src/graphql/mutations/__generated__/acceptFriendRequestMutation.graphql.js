/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type acceptFriendRequestMutationVariables = {|
  request: string
|};
export type acceptFriendRequestMutationResponse = {|
  +acceptFriendRequest: boolean
|};
export type acceptFriendRequestMutation = {|
  variables: acceptFriendRequestMutationVariables,
  response: acceptFriendRequestMutationResponse,
|};
*/


/*
mutation acceptFriendRequestMutation(
  $request: String!
) {
  acceptFriendRequest(request: $request)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "request"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "request",
        "variableName": "request"
      }
    ],
    "kind": "ScalarField",
    "name": "acceptFriendRequest",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "acceptFriendRequestMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "acceptFriendRequestMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9f62dbf8b90b99c102c067a8df462c7b",
    "id": null,
    "metadata": {},
    "name": "acceptFriendRequestMutation",
    "operationKind": "mutation",
    "text": "mutation acceptFriendRequestMutation(\n  $request: String!\n) {\n  acceptFriendRequest(request: $request)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8c1d2ab1ac04780c4c7cfafa9708907b';

module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteFriendRequestMutationVariables = {|
  request: string
|};
export type deleteFriendRequestMutationResponse = {|
  +deleteFriendRequest: boolean
|};
export type deleteFriendRequestMutation = {|
  variables: deleteFriendRequestMutationVariables,
  response: deleteFriendRequestMutationResponse,
|};
*/


/*
mutation deleteFriendRequestMutation(
  $request: String!
) {
  deleteFriendRequest(request: $request)
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
    "name": "deleteFriendRequest",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteFriendRequestMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteFriendRequestMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8a45a021a66269958fe37d7f60c2b307",
    "id": null,
    "metadata": {},
    "name": "deleteFriendRequestMutation",
    "operationKind": "mutation",
    "text": "mutation deleteFriendRequestMutation(\n  $request: String!\n) {\n  deleteFriendRequest(request: $request)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ae4bc578c35eb6778041f41c1730904d';

module.exports = node;

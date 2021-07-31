/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createFriendRequestMutationVariables = {|
  target: string
|};
export type createFriendRequestMutationResponse = {|
  +createFriendRequest: {|
    +_id: string,
    +from: string,
    +to: string,
  |}
|};
export type createFriendRequestMutation = {|
  variables: createFriendRequestMutationVariables,
  response: createFriendRequestMutationResponse,
|};
*/


/*
mutation createFriendRequestMutation(
  $target: String!
) {
  createFriendRequest(target: $target) {
    _id
    from
    to
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "target"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "target",
        "variableName": "target"
      }
    ],
    "concreteType": "FriendRequest",
    "kind": "LinkedField",
    "name": "createFriendRequest",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createFriendRequestMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createFriendRequestMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "57ba64bda601bfbcee578d068fffacb9",
    "id": null,
    "metadata": {},
    "name": "createFriendRequestMutation",
    "operationKind": "mutation",
    "text": "mutation createFriendRequestMutation(\n  $target: String!\n) {\n  createFriendRequest(target: $target) {\n    _id\n    from\n    to\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7286807476a133a790a0f81339e14d82';

module.exports = node;

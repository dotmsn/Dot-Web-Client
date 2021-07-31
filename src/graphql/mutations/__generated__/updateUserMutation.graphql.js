/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateUserDto = {|
  bio?: ?string,
  displayName?: ?string,
  email?: ?string,
|};
export type updateUserMutationVariables = {|
  payload: UpdateUserDto
|};
export type updateUserMutationResponse = {|
  +updateUser: {|
    +_id: string,
    +bio: ?string,
    +displayName: string,
    +email: string,
  |}
|};
export type updateUserMutation = {|
  variables: updateUserMutationVariables,
  response: updateUserMutationResponse,
|};
*/


/*
mutation updateUserMutation(
  $payload: UpdateUserDto!
) {
  updateUser(payload: $payload) {
    _id
    bio
    displayName
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "payload"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "payload",
        "variableName": "payload"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "updateUser",
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
    "name": "updateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e7607a30f57817e864beeded3f2064ba",
    "id": null,
    "metadata": {},
    "name": "updateUserMutation",
    "operationKind": "mutation",
    "text": "mutation updateUserMutation(\n  $payload: UpdateUserDto!\n) {\n  updateUser(payload: $payload) {\n    _id\n    bio\n    displayName\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8f89957efae75ab65d54a1db76b1d472';

module.exports = node;

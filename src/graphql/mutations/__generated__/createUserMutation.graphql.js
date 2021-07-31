/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserDto = {|
  displayName: string,
  email: string,
  password: string,
|};
export type createUserMutationVariables = {|
  payload: CreateUserDto
|};
export type createUserMutationResponse = {|
  +createUser: {|
    +_id: string,
    +bio: ?string,
    +displayName: string,
    +email: string,
    +privateKey: string,
    +publicKey: string,
  |}
|};
export type createUserMutation = {|
  variables: createUserMutationVariables,
  response: createUserMutationResponse,
|};
*/


/*
mutation createUserMutation(
  $payload: CreateUserDto!
) {
  createUser(payload: $payload) {
    _id
    bio
    displayName
    email
    privateKey
    publicKey
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
    "name": "createUser",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "privateKey",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "publicKey",
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
    "name": "createUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bae411286c606154c5eaaa0a05652d28",
    "id": null,
    "metadata": {},
    "name": "createUserMutation",
    "operationKind": "mutation",
    "text": "mutation createUserMutation(\n  $payload: CreateUserDto!\n) {\n  createUser(payload: $payload) {\n    _id\n    bio\n    displayName\n    email\n    privateKey\n    publicKey\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a03bc8749b9c7b61000a0d245a489474';

module.exports = node;

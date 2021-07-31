/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthLoginDto = {|
  email: string,
  password: string,
|};
export type loginMutationVariables = {|
  payload: AuthLoginDto
|};
export type loginMutationResponse = {|
  +login: {|
    +accessToken: string,
    +user: {|
      +_id: string,
      +bio: ?string,
      +displayName: string,
      +email: string,
      +privateKey: string,
      +publicKey: string,
    |},
  |}
|};
export type loginMutation = {|
  variables: loginMutationVariables,
  response: loginMutationResponse,
|};
*/


/*
mutation loginMutation(
  $payload: AuthLoginDto!
) {
  login(payload: $payload) {
    accessToken
    user {
      _id
      bio
      displayName
      email
      privateKey
      publicKey
    }
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
    "concreteType": "Session",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accessToken",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "loginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "loginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "795387be700a861dcbae99ad67ef9a11",
    "id": null,
    "metadata": {},
    "name": "loginMutation",
    "operationKind": "mutation",
    "text": "mutation loginMutation(\n  $payload: AuthLoginDto!\n) {\n  login(payload: $payload) {\n    accessToken\n    user {\n      _id\n      bio\n      displayName\n      email\n      privateKey\n      publicKey\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd2fcb8b90fceda07611cf7c1328435fb';

module.exports = node;

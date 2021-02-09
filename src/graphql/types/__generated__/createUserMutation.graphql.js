/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserInput = {|
  email: string,
  password: string,
  username: string,
|};
export type createUserMutationVariables = {|
  payload: CreateUserInput
|};
export type createUserMutationResponse = {|
  +createUser: {|
    +_id: string,
    +username: string,
  |}
|};
export type createUserMutation = {|
  variables: createUserMutationVariables,
  response: createUserMutationResponse,
|};
*/


/*
mutation createUserMutation(
  $payload: CreateUserInput!
) {
  createUser(payload: $payload) {
    _id
    username
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
        "name": "username",
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
    "cacheID": "fdb4b24a9565334d7dd02f0b9cefeab1",
    "id": null,
    "metadata": {},
    "name": "createUserMutation",
    "operationKind": "mutation",
    "text": "mutation createUserMutation(\n  $payload: CreateUserInput!\n) {\n  createUser(payload: $payload) {\n    _id\n    username\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f21535257ec38df702f30e799f29377a';

module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdatePasswordDto = {|
  newPassword: string,
  oldPassword: string,
|};
export type updatePasswordMutationVariables = {|
  payload: UpdatePasswordDto
|};
export type updatePasswordMutationResponse = {|
  +updatePassword: {|
    +_id: string
  |}
|};
export type updatePasswordMutation = {|
  variables: updatePasswordMutationVariables,
  response: updatePasswordMutationResponse,
|};
*/


/*
mutation updatePasswordMutation(
  $payload: UpdatePasswordDto!
) {
  updatePassword(payload: $payload) {
    _id
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
    "name": "updatePassword",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
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
    "name": "updatePasswordMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updatePasswordMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "48b7975d47e5f17fe751884dc0e4c966",
    "id": null,
    "metadata": {},
    "name": "updatePasswordMutation",
    "operationKind": "mutation",
    "text": "mutation updatePasswordMutation(\n  $payload: UpdatePasswordDto!\n) {\n  updatePassword(payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '04fe5330a3588e66b86e2638694bf79b';

module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type confirmUserMutationVariables = {|
  token: string
|};
export type confirmUserMutationResponse = {|
  +confirmUser: {|
    +_id: string,
    +username: string,
  |}
|};
export type confirmUserMutation = {|
  variables: confirmUserMutationVariables,
  response: confirmUserMutationResponse,
|};
*/


/*
mutation confirmUserMutation(
  $token: String!
) {
  confirmUser(token: $token) {
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
    "name": "token"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "confirmUser",
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
    "name": "confirmUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "confirmUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4d39d7bc7ed685c1d6da82e54121e1b4",
    "id": null,
    "metadata": {},
    "name": "confirmUserMutation",
    "operationKind": "mutation",
    "text": "mutation confirmUserMutation(\n  $token: String!\n) {\n  confirmUser(token: $token) {\n    _id\n    username\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9c10027fac8d362b35e2d9253e29ff39';

module.exports = node;

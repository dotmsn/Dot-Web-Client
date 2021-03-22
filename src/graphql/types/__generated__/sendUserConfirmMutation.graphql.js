/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type sendUserConfirmMutationVariables = {||};
export type sendUserConfirmMutationResponse = {|
  +sendUserConfirm: {|
    +_id: string
  |}
|};
export type sendUserConfirmMutation = {|
  variables: sendUserConfirmMutationVariables,
  response: sendUserConfirmMutationResponse,
|};
*/


/*
mutation sendUserConfirmMutation {
  sendUserConfirm {
    _id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "sendUserConfirm",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "sendUserConfirmMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "sendUserConfirmMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e637fea47b3e5ca908dbe389c17a059b",
    "id": null,
    "metadata": {},
    "name": "sendUserConfirmMutation",
    "operationKind": "mutation",
    "text": "mutation sendUserConfirmMutation {\n  sendUserConfirm {\n    _id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e40cd4224b10c098bf66c6ddde48c7af';

module.exports = node;

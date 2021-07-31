import { commitMutation, fetchQuery } from 'react-relay';
import { initEnvironment } from '../graphql/environment';

import * as Mutations from '../graphql/mutations';
import * as Queries from '../graphql/queries';

const environment = initEnvironment();

const mutationExecuter = (mutation, variables = {}) =>
  new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    });
  });

const queryExecuter = (query, variables = {}) =>
  new Promise((resolve, reject) => {
    fetchQuery(environment, {
      query,
      variables,
      onCompleted: resolve,
      onError: reject,
    });
  });

export const register = (displayName, email, password) =>
  mutationExecuter(Mutations.createUser, { displayName, email, password });

export const login = (email, password) =>
  mutationExecuter(Mutations.login, { email, password });

export const verify = () => queryExecuter(Queries.getCurrentUser);

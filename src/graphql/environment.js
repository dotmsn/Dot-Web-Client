import {
  Environment,
  Network,
  QueryResponseCache,
  RecordSource,
  Store,
} from 'relay-runtime';

const cache = new QueryResponseCache({
  size: 250,
  ttl: 60 * 1000,
});

var environment = null;

async function fetchQuery(operation, variables = {}, cacheConfig) {
  const queryID = operation.text;
  const isMutation = operation.operationKind === 'mutation';
  const isQuery = operation.operationKind === 'query';
  const forceFetch = cacheConfig && cacheConfig.force;
  const fromCache = cache.get(queryID, variables);

  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }

  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      recaptcha: localStorage.getItem('captcha'),
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (isQuery && json) {
        cache.set(queryID, variables, json);
      }

      if (isMutation) {
        cache.clear();
      }

      return json;
    });
}

export const initEnvironment = ({ records = {} } = {}) => {
  if (!environment) {
    const network = Network.create(fetchQuery);
    const store = new Store(new RecordSource(records));

    environment = new Environment({
      network,
      store,
    });
  }

  return environment;
};

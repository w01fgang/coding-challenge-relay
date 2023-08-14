// @flow strict
import type { RecordObjectMap } from 'relay-runtime/store/RelayStoreTypes.js.flow';

import {
  RelayNetworkLayer,
  urlMiddleware,
  authMiddleware,
} from 'react-relay-network-modern/node8';
import RelaySSR from 'react-relay-network-modern-ssr/node8/server';
import {
  Network, Environment, RecordSource, Store,
} from 'relay-runtime';

const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
export const endpoint = `${protocol}://${String(process.env.NEXT_PUBLIC_VERCEL_URL)}/api/graphql`;

function fetchQuery(
  operation,
  variables,
) {
  return fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then((response) => response.json());
}

type InitEnvParams = {|
  +records: RecordObjectMap,
  +relayData: $FlowFixMe,
|};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  initEnvironment: (): {|environment: Environment, relaySSR: RelaySSR|} => {
    const source = new RecordSource();
    const store = new Store(source);
    const relaySSR = new RelaySSR();

    return {
      relaySSR,
      environment: new Environment({
        store,
        // $FlowFixMe
        network: new RelayNetworkLayer([
          urlMiddleware({
            url: endpoint,
          }),
          // $FlowFixMe
          relaySSR.getMiddleware(),
        ]),
      }),
    };
  },
  createEnvironment: ({ records, relayData }: InitEnvParams, key: string): Environment => { // eslint-disable-line no-unused-vars
    const source = new RecordSource(records);
    const store = new Store(source, { gcReleaseBufferSize: 10 });

    return new Environment({
      store,
      network: Network.create(fetchQuery),
    });
  },
};

// @flow strict
import type { RecordObjectMap } from 'relay-runtime/store/RelayStoreTypes.js.flow';
import {
  RelayNetworkLayer,
  cacheMiddleware,
  urlMiddleware,
  errorMiddleware,
} from 'react-relay-network-modern';
import RelaySSR from 'react-relay-network-modern-ssr/node8/client';
import {
  Environment, RecordSource, Store,
} from 'relay-runtime';
import ConnectionHandler from 'relay-connection-handler-plus';

function handlerProvider(handle) {
  switch (handle) {
    case 'connection':
      return ConnectionHandler;
    default:
      throw new Error(`no handler configured for ${handle}`);
  }
}

const source = new RecordSource();
const store = new Store(source);

let storeEnvironment = null;

const experimentCacheEndpoint = process.env.NEXT_PUBLIC_EXPERIMENT_CACHE;
const isDev = process.env.NODE_ENV === 'development';

type InitEnvParams = {|
  +records: RecordObjectMap,
  +relayData: $FlowFixMe,
|};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createEnvironment: ({ relayData }: InitEnvParams, key: string): Environment => {
    if (storeEnvironment) return storeEnvironment;

    storeEnvironment = new Environment({
      store,
      handlerProvider,
      // $FlowFixMe[incompatible-variance]
      // $FlowFixMe[incompatible-call]
      // $FlowFixMe[prop-missing]
      network: new RelayNetworkLayer([
        cacheMiddleware({
          size: 100,
          ttl: 5 * 60 * 1000,
          clearOnMutation: true,
        }),
        isDev ? errorMiddleware() : null,
        new RelaySSR(relayData).getMiddleware({
          lookup: true,
        }),
        urlMiddleware({
          url: experimentCacheEndpoint || '/api/graphql',
        }),
      ]),
    });

    return storeEnvironment;
  },
};

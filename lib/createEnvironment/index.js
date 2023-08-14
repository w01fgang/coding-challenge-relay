// @flow strict
// $FlowFixMe[prop-missing] initEnvironment exists only on the server
export const { initEnvironment, createEnvironment } = (typeof window
=== 'undefined'
  ? require('./server') // eslint-disable-line global-require
  : require('./client') // eslint-disable-line global-require
).default;

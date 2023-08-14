module.exports = {
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: './',
  schema: './pages/api/mock.graphql',
  exclude: ['**/.next/**', '**/node_modules/**', '**/test/**', '__generated__/**'],
  artifactDirectory: '__generated__',
  noFutureProofEnums: true,
};

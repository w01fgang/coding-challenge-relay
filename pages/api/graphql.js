// @flow
import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlHTTP } from "express-graphql";
// $FlowFixMe
import typeDefs from "./mock.graphql";
import resolvers from "./resolvers";

const schema = makeExecutableSchema({ typeDefs, resolvers });

<<<<<<< Updated upstream
const resolvers = {
  Query: {
    viewer: () => viewer,
  },
  Mutation: {
    // TODO: Implement mutations
  }
}

const schema = makeExecutableSchema({ typeDefs: schemaString, resolvers });

const handler =  (req: NextApiRequest, res: NextApiResponse<any>) => {
=======
const handler = (req, res) => {
>>>>>>> Stashed changes
  return graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: (error) => ({
      message: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split("\n") : [],
      path: error.path,
    }),
  })(req, res);
};

export default handler;

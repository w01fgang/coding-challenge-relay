// @flow
import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphqlHTTP } from 'express-graphql';
// $FlowFixMe
import schemaString from './mock.graphql';
import * as products from './products';

const viewer = {
  me: () => ({
    id: 9287364982716489723,
    name: 'Ernest',
    surname: 'Thompson',
    companyName: 'Test company, S.R.L.',
    role: 'ADMIN',
    createdAt: '2019-11-08T06:50:17.449Z',
  }),
  products: () => products.get(),
};

const resolvers = {
  Query: {
    viewer: () => viewer,
  },
  Mutation: {
    createProduct: (parrent, args) => {
      if (args) {
        const newProduct = {
          id: new Date().now,
          name: args.name,
          description: args.description,
          price: args.price,
          createdAt: new Date().toISOString,
        };
        products.add(newProduct);
        return newProduct;
      }
    },
    updateProduct: (parrent, args) => {
      if (args) {
        const product = find(products, { id: args.id });
        product.name = args.name;
        product.description = args.description;
        product.price = args.price;
        return product;
      }
    },
  },
};

const schema = makeExecutableSchema({ typeDefs: schemaString, resolvers });

const handler = (req: NextApiRequest, res: NextApiResponse<any>) => {
  return graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: (error) => ({
      message: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split('\n') : [],
      path: error.path,
    }),
  })(req, res);
};

export default handler;

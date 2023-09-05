import * as products from "./products";

const viewer = {
  me: () => ({
    id: 9287364982716489723,
    name: "Ernest",
    surname: "Thompson",
    companyName: "Test company, S.R.L.",
    role: "ADMIN",
    createdAt: "2019-11-08T06:50:17.449Z",
  }),
  products: () => products.get(),
};

const getProductById = (id) => {
  const allProducts = products.get();
  const product = allProducts.find((product) => +product.id === +id);

  if (!product) {
    return null;
  }

  return product;
};

const addProduct = ({ input }) => {
  const newProduct = {
    id: products.get().length + 1,
    ...input,
    createdAt: new Date().toISOString(),
  };

  products.add(newProduct);

  return { product: newProduct };
};

const editProduct = ({ input }) => {
  const existingProductIndex = products.products.findIndex(
    (product) => +product.id === parseInt(input.id)
  );

  if (existingProductIndex === -1) {
    return null;
  }

  const updatedProduct = {
    ...products.products[existingProductIndex],
    ...input,
  };

  if (input.createdAt) {
    updatedProduct.createdAt = input.createdAt;
  }

  products.products[existingProductIndex] = updatedProduct;

  return { product: updatedProduct };
};

const resolvers = {
  Query: {
    viewer: () => viewer,
    product: (_, { id }) => getProductById(id),
  },
  Mutation: {
    addProduct: (_, { input }) => addProduct({ input }),
    editProduct: (_, { input }) => editProduct({ input }),
  },
};

export default resolvers;

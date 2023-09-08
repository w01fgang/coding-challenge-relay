// @flow
import { faker } from '@faker-js/faker';

type Product = {
  id: number,
  name: string,
  price: number,
  description: string,
  category: string,
  createdAt: string,
};

export const products: Product[] = new Array(9).fill(1).map((_, i) => ({
  id: i + 1,
  name: faker.commerce.productName(),
  price: parseFloat(faker.commerce.price()),
  description: faker.commerce.productDescription(),
  category: faker.commerce.department(),
  createdAt: faker.date.past().toISOString(),
}));

export const get = () => products;

export const add = (product: Object) => {
  product.id = products.length + 1;
  product.createdAt = new Date().toISOString();
  products.push(product);
  return product;
};

export const edit = (productId: number, newData: Object) => {
  const productIndex = products.findIndex((product) => product.id === productId);

  if (productIndex === -1) {
    throw new Error(`Couldn't find product with id ${productId}`);
  }

  products[productIndex] = { ...products[productIndex], ...newData };

  return products[productIndex];
};

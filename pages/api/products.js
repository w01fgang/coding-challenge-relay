// @flow
import { faker } from '@faker-js/faker';

type Product = {
  id: number,
  name: string,
  price: string,
  description: string,
  category: string,
  createdAt: string,
};

export const products: Product[] = new Array(9).fill(1).map((_, i) => ({
  id: i + 1,
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  category: faker.commerce.department(),
  createdAt: faker.date.past().toISOString(),
}));

export const get = () => products;

export const add = (product: Object) => {

  product.id = products.length + 1
  product.createdAt = new Date().toISOString()

  // console.log(newProduct, 'newProduct')
  
  products.push(product);

  return product
};

export const edit = (productId: Number, newData: Object)=>{
  let product = products.filter(product =>  product.id == productId)

  if (!product) {
    throw new Error(`Couldn’t find product with id ${productId}`);
  }

  product = {...product[0], ...newData}

  products.splice(productId - 1, 1, product)
  // console.log(product, 'product')

  return product

}
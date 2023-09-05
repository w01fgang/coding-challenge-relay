import { request } from "graphql-request";
import { getAllProductsQuery } from "../queries";

const ENDPOINT = "http://localhost:3000/api/graphql";

export const getAllProducts = async () => {
  try {
    const data = await request(ENDPOINT, getAllProductsQuery);
    return data.viewer.products;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }
};

import React from "react";
import AddProduct from "../components/ProductForm.js/AddProduct";
import CreateProductButton from "../components/CreateProductButton";
const CreateProduct = () => {
  return (
    <>
      <CreateProductButton path="/" label={"Go Back"} />
      <AddProduct />
    </>
  );
};

export default CreateProduct;

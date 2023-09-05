// @flow
import React from "react";

import useEditProductData from "../../utils/hooks/useEditProductData";
import EditProduct from "../../components/EditProduct";
import CreateProductButton from "../../components/CreateProductButton";

type EditProductPageProps = {
  id: ?number,
};

function EditProductPage({ id }: EditProductPageProps) {
  const data = useEditProductData(id);

  return (
    <div>
      <CreateProductButton path="/" label={"Go Back"} />
      <EditProduct productId={id} initialData={data?.product} />
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  const { editProduct } = params;

  return {
    props: {
      id: editProduct,
    },
  };
}

export default EditProductPage;

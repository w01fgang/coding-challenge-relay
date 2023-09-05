import React from "react";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";

function CreateProductButton({ path, label }) {
  const router = useRouter();

  const handleCreateProduct = () => {
    router.push(path);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleCreateProduct}>
      {label}
    </Button>
  );
}

export default CreateProductButton;

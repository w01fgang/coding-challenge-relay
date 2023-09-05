import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import ProductCard from "../components/Product/ProductCard";
import CreateProductButton from "../components/CreateProductButton";
import { getAllProducts } from "../utils/api";

const Index = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getAllProducts();
        setData(products);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    router.push(`/edit/${id}`);
  };

  return (
    <Box marginTop={4}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box m={4}>
            <Typography variant="h1">Products</Typography>
          </Box>
          <CreateProductButton path="/create" label={"Create Product"} />
        </Grid>
        {data?.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              product={product}
              onClick={() => handleCardClick(product.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;

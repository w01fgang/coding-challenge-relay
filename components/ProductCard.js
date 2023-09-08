// @flow
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { Box } from "@material-ui/core";
import NavigateComponent from "./NavigateComponent";
import InfoId from "../pages/infoCard/[id]";
import React from "react";

export function ProductCard({ product }: { product: $FlowFixMe }) {
  return (
    <Card style={{ maxWidth: 400, margin: 20, flex: "1 1 30%" }}>
      <CardContent>
        <Box className="product-card">
          <NavigateComponent
            path={`infoCard/${product.id}`}
            text={product.name}
          >
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
          </NavigateComponent>
        </Box>

        <Typography variant="subtitle1" color="textSecondary">
          Price: ${product.price?.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="caption" color="textSecondary" display="block">
          Created At: {new Date(product.createdAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

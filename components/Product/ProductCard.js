// @flow
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./ProductCardStyles";

function ProductCard({ product, onClick }: { product: $FlowFixMe }) {
  const classes = useStyles();
  return (
    <Card className={classes.productCard} onClick={onClick}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          className={classes.productName}
        >
          {product.name}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.productPrice}
        >
          Price: ${product.price.toFixed(2)}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.productDescription}
        >
          {product.description}
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          display="block"
          className={classes.productCreatedAt}
        >
          Created At: {new Date(product.createdAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

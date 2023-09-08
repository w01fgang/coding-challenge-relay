// @flow
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function ProductCard({ product }: { product: $FlowFixMe }) {
  return (
    <Card style={{ maxWidth: 400, margin: 20}}>
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h5' component='div'>
          {product.name}
        </Typography>
        <Typography variant='subtitle1' color='textSecondary'>
          Price: ${product.price.toFixed(2)}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {product.description}
        </Typography>
        <Typography variant='caption' color='textSecondary' display='block'>
          Created At: {new Date(product.createdAt).toLocaleDateString()}
        </Typography>
        <Button
          href={`/edit/${product.id}`}
          style={{
            border: '1px solid #000',
            width: 'fit-content',
            height: '30px',
            marginTop: '10px',
            alignSelf: 'end',
          }}
        >
          Edit
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

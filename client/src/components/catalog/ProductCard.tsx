import {
  CardContent,
  Button,
  Card,
  CardActions,
  Typography,
  CardMedia,
  Avatar,
  CardHeader,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Product } from '../../models/product';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}>{product.name.charAt(0).toUpperCase()}</Avatar>}
        image={product.pictureUrl}
        title={product.name}
        titleTypographyProps={{ sx: { fontWeight: 'bold', color: 'primary.main' } }}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
        image={product.pictureUrl}
        title={product.pictureUrl}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          ${product.price && (product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ADD TO CART</Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">
          VIEW
        </Button>
      </CardActions>
    </Card>
  );
}

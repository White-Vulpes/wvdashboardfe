import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Label } from 'src/components/label';
import { Checkbox, colors, Fade } from '@mui/material';
import { useState } from 'react';

export type ProductItemProps = {
  id: string;
  name: string;
  url: string;
  category: string;
};

export function ProductItem({
  product,
  addItem,
  removeItem,
  isSelected,
}: {
  product: ProductItemProps;
  addItem: Function;
  removeItem: Function;
  isSelected: boolean;
}) {
  const [isChecked, setChecked] = useState(isSelected);
  const handleChange = () => {
    setChecked(!isChecked);
    if (isChecked) {
      removeItem(product);
    } else {
      addItem(product);
    }
  };

  return (
    <Fade in timeout={500}>
      <Card onClick={handleChange}>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          <Label
            variant="inverted"
            sx={{
              zIndex: 9,
              top: 16,
              right: 0,
              position: 'absolute',
              backgroundColor: 'rgba(0, 0, 0, 0)',
            }}
          >
            <Checkbox color="primary" checked={isChecked} />
          </Label>

          <Box
            component="img"
            alt={product.name}
            src={product.url}
            sx={{
              top: 0,
              width: 1,
              height: 1,
              objectFit: 'cover',
              position: 'absolute',
            }}
          />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
            {product.name.split('.')[0]}
          </Link>

          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography>{product.category}</Typography>
          </Box>
        </Stack>
      </Card>
    </Fade>
  );
}

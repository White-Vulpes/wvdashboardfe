import { useState, useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { useSnackbar } from 'notistack';
import { DashboardContent } from 'src/layouts/dashboard';
import { useAuth } from 'src/routes/hooks';
import { Fallback } from 'src/layouts/fallback';
import _ from 'lodash';
import { Iconify } from 'src/components/iconify';
import { Button } from '@mui/material';
import { ProductItem } from '../images-item';
import { ProductSort } from '../images-sort';
import { CartIcon } from '../images-cart-widget';
import { ImagesModal } from '../images-modal';
import { ImagesUploadModal } from '../images-upload';

const itemsPerPage = 32;

type deleteState = 'deleted' | 'deleting';

export function ImagesView({ components }: { components: any }) {
  const [sortBy, setSortBy] = useState('');
  const [isAuthenticated, token] = useAuth();
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [duplicate, setDuplicate] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<deleteState>('deleted');
  const { enqueueSnackbar } = useSnackbar();
  const [upload, setUpload] = useState<boolean>(false);

  useEffect(() => {
    if (deleting !== 'deleting' && upload === false) {
      fetch(`${import.meta.env.VITE_HASURA_URL}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          query: components.query,
          variables: {
            website_id: `${import.meta.env.VITE_WEBSITE_ID}`,
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setImages(res.data.images.slice(0, itemsPerPage));
          setDuplicate(res.data.images);
        });
    }
  }, [token, components, deleting, upload]);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    setImages(_.sortBy(duplicate, [sortBy]).slice(itemsPerPage * (page - 1), itemsPerPage * page));
  }, [sortBy, duplicate, page]);

  const handleSort = useCallback((newSort: string) => {
    setSortBy(newSort);
  }, []);
  const addSelectedItems = useCallback((product: string) => {
    setSelectedItems((prevValue) => [...prevValue, product]);
  }, []);

  const removeSelectedItems = useCallback((product: string) => {
    setSelectedItems((prevState: string[]) =>
      _.filter(prevState, (item) => !_.isEqual(item, product))
    );
  }, []);

  const handlePage = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }, []);

  const openModal = useCallback(() => {
    if (selectedItems.length > 0) setOpen(true);
  }, [selectedItems]);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);
  const handleDelete = useCallback(() => {
    setDeleting('deleting');
    fetch(`${import.meta.env.VITE_API_URL}/deleteImages`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        images: selectedItems,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.errors) enqueueSnackbar('There was an error deleting images', { variant: 'error' });
        else if (res.anomaly > 0) {
          enqueueSnackbar(`Anomaly in ${res.anomaly} images`, { variant: 'warning' });
        } else {
          enqueueSnackbar(`Deleted ${res.affected_rows} images`, { variant: 'success' });
        }
        setOpen(false);
        setDeleting('deleted');
        setSelectedItems([]);
      })
      .catch((e) => {
        enqueueSnackbar('There was an error. Please try again later', { variant: 'error' });
        setOpen(false);
        setDeleting('deleted');
      });
  }, [selectedItems, token, enqueueSnackbar]);

  const handleUpload = useCallback(() => {
    setUpload((prev) => !prev);
  }, []);

  return loading || deleting === 'deleting' ? (
    <Fallback />
  ) : (
    <DashboardContent>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Images
      </Typography>

      <CartIcon totalItems={selectedItems.length} onClick={openModal} />

      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="space-between"
        sx={{ mb: 5 }}
      >
        <Button
          color="primary"
          size="medium"
          variant="contained"
          onClick={handleUpload}
          startIcon={<Iconify width={15} icon="fluent:add-12-filled" />}
        >
          Upload
        </Button>
        <Box gap={1} display="flex" flexShrink={0} sx={{ my: 1 }}>
          <ProductSort
            sortBy={sortBy}
            onSort={handleSort}
            options={[
              { value: 'name', label: 'Name' },
              { value: 'category', label: 'Category' },
              { value: 'created_at', label: 'Uploaded At' },
            ]}
          />
        </Box>
      </Box>

      <Grid container spacing={3}>
        {images.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductItem
              product={product}
              addItem={addSelectedItems}
              removeItem={removeSelectedItems}
              isSelected={_.some(selectedItems, product)}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={
          Math.floor(duplicate.length / itemsPerPage) +
          Number(!(duplicate.length % itemsPerPage === 0))
        }
        color="primary"
        page={page}
        sx={{ mt: 8, mx: 'auto' }}
        onChange={handlePage}
      />
      <ImagesModal
        open={open}
        closeModal={closeModal}
        deleteItems={handleDelete}
        count={selectedItems.length}
      />
      <ImagesUploadModal open={upload} closeModal={handleUpload} />
    </DashboardContent>
  );
}

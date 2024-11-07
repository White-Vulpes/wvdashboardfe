import {
  Button,
  Card,
  Fade,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { enqueueSnackbar } from 'notistack';
import { ImagesDropZone } from './images-drop-zone';

type Props = {
  open: boolean;
  closeModal: Function;
};

export function ImagesUploadModal({ open, closeModal }: Props) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [category, setCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');

  useEffect(() => {
    if (selectedFiles.length > 0) {
      if (category === '') {
        enqueueSnackbar('Please Select a Category', { variant: 'error' });
      } else {
        enqueueSnackbar('Uploading...', {
          variant: 'uploadItems',
          selectedItems: selectedFiles,
          category: category === 'ADD_NEW' ? customCategory : category,
          persist: true,
        });
      }
      setSelectedFiles([]);
    }
  }, [selectedFiles, category, customCategory]);

  const handleClose = () => {
    closeModal();
  };

  const handleChange = (event: any) => {
    setCategory(event.target.value as string);
  };
  const handleCustomChange = (event: any) => {
    setCustomCategory(event.target.value as string);
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={open}>
        <Card
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            outline: 0,
            p: 4,
          }}
        >
          <FormControl
            fullWidth
            sx={{
              display: 'flex',
              gap: 3,
              mb: 3,
            }}
          >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value="NEW_BORN">New Born</MenuItem>
              <MenuItem value="JEWELLERY">Jewellery</MenuItem>
              <MenuItem value="MÉLANGE">Mélange</MenuItem>
              <MenuItem value="FASHION">Fashion</MenuItem>
              <MenuItem value="COMMERCIAL">Commercial</MenuItem>
              <MenuItem value="INTERIOR">Interior</MenuItem>
              <MenuItem value="PRODUCT">Product</MenuItem>
              <MenuItem value="WILDLIFE">Wildlife</MenuItem>
              <MenuItem value="ADD_NEW">Add New Category</MenuItem>
            </Select>
            {category === 'ADD_NEW' ? (
              <Fade in>
                <TextField
                  value={customCategory}
                  onChange={handleCustomChange}
                  label="Category Name"
                />
              </Fade>
            ) : (
              <></>
            )}
            <ImagesDropZone addSelectedFiles={setSelectedFiles} />
          </FormControl>
          <Button onClick={handleClose}>Close</Button>
        </Card>
      </Fade>
    </Modal>
  );
}

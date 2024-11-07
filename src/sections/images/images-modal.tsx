import { Box, BoxProps, Button, Card, CardProps, Fade, Modal, Typography } from '@mui/material';

type Props = {
  open: boolean;
  closeModal: Function;
  deleteItems: Function;
  count: number;
};

export function ImagesModal({ open, closeModal, deleteItems, count }: Props) {
  const handleClose = () => {
    closeModal();
  };

  const handleDelete = () => {
    deleteItems();
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
          <Typography id="modal-modal-title" variant="h3" component="h1">
            Delete?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 3 }}>
            You are about to delete {count} images.
            <br /> This action is irreversible
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button color="primary" size="large" onClick={handleClose}>
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                Close
              </Typography>
            </Button>
            <Button color="error" variant="contained" size="large" onClick={handleDelete}>
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                Yes, I am sure
              </Typography>
            </Button>
          </Box>
        </Card>
      </Fade>
    </Modal>
  );
}

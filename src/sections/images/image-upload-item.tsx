import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import {
  Box,
  Card,
  CardActions,
  Collapse,
  Fade,
  IconButton,
  Paper,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import BorderProgressBar from '@whitevulpes/border-progress-bar';
import { CustomContentProps, SnackbarContent, useSnackbar } from 'notistack';
import { Iconify } from 'src/components/iconify';

interface Props extends CustomContentProps {
  selectedItems: File[];
  category: string;
}

const StyledSnackbarContent = styled(SnackbarContent)(({ theme }) => ({
  minWidth: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '400px',
  },
}));

const ImageUploadItem = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { selectedItems, message, id, category } = props;
  const [imageData, setImageData] = useState<any[]>(
    _.fill(Array(selectedItems.length), { name: '', type: '', content: '' })
  );
  const theme = useTheme();
  const [progressData, setProgressData] = useState<number[]>(
    _.fill(Array(selectedItems.length), 0)
  );
  const { closeSnackbar } = useSnackbar();
  const [expanded, setExpanded] = useState(true);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      _.forEach(selectedItems, (file, index) => {
        const reader = new FileReader();
        reader.onload = (ev: any) => {
          setImageData((prev) => {
            const updatedImages = [...prev];
            updatedImages[index] = { name: file.name, type: file.type, content: ev.target.result };
            return updatedImages;
          });
          const ws = new WebSocket(`${import.meta.env.VITE_API_URL}/upload`);
          ws.onopen = (e) => {
            ws.send(
              JSON.stringify({
                bucketName: 'polaroidfiles',
                key: `${category}/${file.name}`,
                type: file.type,
                content: ev.target.result,
                website_id: `${import.meta.env.VITE_WEBSITE_ID}`,
              })
            );
          };
          ws.onmessage = (e) => {
            const data = JSON.parse(e.data);
            if (data.message === 'Upload Successful') ws.close();
            else {
              setProgressData((prev) => {
                const updatedProgress = [...prev];
                updatedProgress[index] = data.error !== undefined ? -1 : data.loaded / data.total;
                return updatedProgress;
              });
            }
          };
        };
        reader.readAsDataURL(file);
      });
      isMounted.current = true;
    }
  }, [selectedItems, category]);

  const handleExpandClick = useCallback(() => {
    setExpanded((oldExpanded) => !oldExpanded);
  }, []);

  const handleDismiss = useCallback(() => {
    closeSnackbar(id);
  }, [id, closeSnackbar]);

  return (
    <StyledSnackbarContent ref={ref}>
      <Card
        sx={{
          width: '100%',
        }}
        style={{ backgroundColor: theme.palette.primary.light }}
      >
        <CardActions
          sx={{
            padding: '8px 8px 8px 16px',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            {message}
          </Typography>
          <Box
            sx={{
              marginLeft: 'auto',
            }}
          >
            <IconButton
              aria-label="Show more"
              size="small"
              sx={{
                padding: '8px 8px',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                color: '#000',
                transition: 'all .2s',
              }}
              onClick={handleExpandClick}
            >
              <Iconify fontSize="small" icon="ic:baseline-expand-more" />
            </IconButton>
            <IconButton size="small" onClick={handleDismiss}>
              <Iconify fontSize="small" icon="material-symbols:close" />
            </IconButton>
          </Box>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit={false}>
          <Paper sx={{ backgroundColor: '#fff', padding: 2, display: 'flex', flexWrap: 'wrap' }}>
            {_.map(imageData, (i, index) => (
              <Fade in timeout={1000} key={index}>
                <Box
                  sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: 2,
                    position: 'relative',
                    m: 1,
                    backgroundImage: `url(${i.content})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <BorderProgressBar
                    strokeWidth={4}
                    strokeColor={
                      progressData[index] === -1
                        ? theme.palette.error.light
                        : theme.palette.success.light
                    }
                    progress={progressData[index]}
                  />
                </Box>
              </Fade>
            ))}
          </Paper>
        </Collapse>
      </Card>
    </StyledSnackbarContent>
  );
});

export default ImageUploadItem;

declare module 'notistack' {
  interface VariantOverrides {
    uploadItems: {
      selectedItems: File[];
      category: string;
    };
  }
}

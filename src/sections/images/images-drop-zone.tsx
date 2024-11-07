import { Box, Typography, useTheme } from '@mui/material';
import _ from 'lodash';
import { useSnackbar } from 'notistack';
import { useCallback, useRef, useState } from 'react';
import { Iconify } from 'src/components/iconify';
import { useFilePicker } from 'use-file-picker';
import { FileTypeValidator } from 'use-file-picker/validators';

type ImagesDropZoneProps = {
  addSelectedFiles: Function;
};

const maximumFilesAllowed = 12;

export function ImagesDropZone({ addSelectedFiles }: ImagesDropZoneProps) {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const boxRef = useRef<HTMLDivElement>();
  const { openFilePicker } = useFilePicker({
    multiple: true,
    readFilesContent: false,
    validators: [new FileTypeValidator(['jpg', 'jpeg', 'JPG', 'JPEG'])],
    onFilesSelected: ({ plainFiles, errors }: any) => {
      if (plainFiles !== undefined) {
        addSelectedFiles((prev: any[]) => {
          if (prev.length + plainFiles.length > maximumFilesAllowed) {
            enqueueSnackbar(`Maximum of ${maximumFilesAllowed} files can be uploaded at once.`, {
              variant: 'error',
            });
          }
          return [...prev, ...plainFiles.slice(0, maximumFilesAllowed - prev.length)];
        });
      }
      if (errors !== undefined) {
        _.forEach(errors, (i) => {
          enqueueSnackbar(`${i.causedByFile.type} is not supported. Please drop a valid file`, {
            variant: 'error',
          });
        });
      }
    },
  });

  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  document.addEventListener('drop', (event) => {
    event.preventDefault();
  });

  const handleDrop = useCallback(
    (ev: any) => {
      ev.preventDefault();
      if (boxRef.current) {
        boxRef.current.style.backgroundColor = 'white';
      }
      const allowedTypes = ['image/jpg', 'image/jpeg'];
      const files = _.chain(ev.dataTransfer.files)
        .map((i) => {
          if (allowedTypes.includes(i.type)) {
            return i;
          }
          enqueueSnackbar(`${i.type} is not supported. Please drop a valid file`, {
            variant: 'error',
          });
          return null;
        })
        .compact()
        .value();
      addSelectedFiles((prev: any[]) => {
        if (prev.length + files.length > maximumFilesAllowed) {
          enqueueSnackbar('Maximum of 16 files can be uploaded at once.', {
            variant: 'error',
          });
        }
        return [...prev, ...files.slice(0, maximumFilesAllowed - prev.length)];
      });
    },
    [enqueueSnackbar, addSelectedFiles]
  );

  const handleDragEnter = useCallback(
    (ev: any) => {
      ev.preventDefault();
      if (boxRef.current) {
        boxRef.current.style.backgroundColor = theme.palette.primary.lighter;
      }
    },
    [theme]
  );

  const handleDragLeave = useCallback((ev: any) => {
    ev.preventDefault();
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = 'white';
    }
  }, []);

  const handleClick = useCallback(
    (ev: any) => {
      openFilePicker();
    },
    [openFilePicker]
  );

  return (
    <Box
      ref={boxRef}
      sx={{
        height: 150,
        position: 'relative',
        outlineStyle: 'dashed',
        outlineColor: theme.palette.primary.light,
        outlineWidth: '2px',
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transition: '.3s',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        }}
      >
        <Iconify width={50} icon="solar:inbox-linear" />
        <Typography>Drop or Click Here to Select Files</Typography>
      </Box>
      <Box
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onClick={handleClick}
        onDragLeave={handleDragLeave}
        onMouseEnter={handleDragEnter}
        onMouseLeave={handleDragLeave}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}
      />
    </Box>
  );
}

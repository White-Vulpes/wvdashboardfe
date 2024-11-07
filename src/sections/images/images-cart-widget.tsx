import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';

import { Iconify } from 'src/components/iconify';
import { Modal, Typography } from '@mui/material';
import { useState } from 'react';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  totalItems: number;
};

export function CartIcon({ totalItems, sx, ...other }: Props) {
  return (
    <Box
      sx={{
        right: 0,
        top: 112,
        zIndex: 999,
        display: 'flex',
        cursor: 'pointer',
        position: 'fixed',
        color: 'text.primary',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        bgcolor: 'background.paper',
        padding: (theme) => theme.spacing(1, 3, 1, 2),
        boxShadow: (theme) => theme.customShadows.dropdown,
        transition: (theme) => theme.transitions.create(['opacity']),
        '&:hover': { opacity: 0.72 },
        ...sx,
      }}
      {...other}
    >
      <Badge badgeContent={totalItems} color="error" max={99}>
        <Iconify icon="fluent:delete-12-regular" width={24} />
      </Badge>
    </Box>
  );
}

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuList from '@mui/material/MenuList';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { Fade, Link } from '@mui/material';

// ----------------------------------------------------------------------

export type UserProps = {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

type UserTableRowProps = {
  row: UserProps;
  selected: boolean;
  onSelectRow: () => void;
};

export function UserTableRow({ row, selected, onSelectRow }: UserTableRowProps) {
  const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenPopover(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  return (
    <>
      <Fade in timeout={500}>
        <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
          <TableCell padding="checkbox">
            <Checkbox disableRipple checked={selected} onChange={onSelectRow} />
          </TableCell>

          <TableCell component="th" scope="row">
            <Box gap={2} display="flex" alignItems="center">
              <Avatar alt={row.name} src="/assets/images/avatar/avatar-25.webp" />
              {row.name}
            </Box>
          </TableCell>

          <TableCell>{row.message}</TableCell>

          <TableCell>
            <Link href={`mailto:${row.email}`}>{row.email}</Link>
          </TableCell>

          <TableCell>
            <Link href={`tel:${row.phone}`}>{row.phone}</Link>
          </TableCell>

          <TableCell align="right">
            <IconButton onClick={handleOpenPopover}>
              <Iconify icon="eva:more-vertical-fill" />
            </IconButton>
          </TableCell>
        </TableRow>
      </Fade>
      <Popover
        open={!!openPopover}
        anchorEl={openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuList
          disablePadding
          sx={{
            p: 0.5,
            gap: 0.5,
            width: 140,
            display: 'flex',
            flexDirection: 'column',
            [`& .${menuItemClasses.root}`]: {
              px: 1,
              gap: 2,
              borderRadius: 0.75,
              [`&.${menuItemClasses.selected}`]: { bgcolor: 'action.selected' },
            },
          }}
        >
          <MenuItem onClick={handleClosePopover} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
}
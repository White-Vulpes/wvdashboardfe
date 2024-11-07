import type { ButtonBaseProps } from '@mui/material/ButtonBase';

import { useState } from 'react';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

import { varAlpha } from 'src/theme/styles';

import { Label } from 'src/components/label';

//  TODO add a callback to take to plans page

export type WorkspacesPopoverProps = ButtonBaseProps & {
  data?: {
    id: string;
    name: string;
    logo: string;
    plan: string;
  };
};

export function WorkspacesPopover({
  data = {
    id: '',
    name: '',
    logo: '',
    plan: '',
  },
  sx,
  ...other
}: WorkspacesPopoverProps) {
  const [workspace, setWorkspace] = useState(data);

  const renderAvatar = (alt: string, src: string) => (
    <Box component="img" alt={alt} src={src} sx={{ width: 24, height: 24, borderRadius: '50%' }} />
  );

  const renderLabel = (plan: string) => (
    <Label color={plan === 'Free' ? 'default' : 'success'}>{plan}</Label>
  );

  return (
    <>
      <ButtonBase
        disableRipple
        sx={{
          pl: 2,
          py: 3,
          gap: 1.5,
          pr: 1.5,
          width: 1,
          borderRadius: 1.5,
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
          ...sx,
        }}
        {...other}
      >
        {renderAvatar(workspace?.name, workspace?.logo)}

        <Box
          gap={1}
          flexGrow={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ typography: 'body2', fontWeight: 'fontWeightSemiBold' }}
        >
          {workspace?.name}
          {renderLabel(workspace?.plan)}
        </Box>
      </ButtonBase>
    </>
  );
}

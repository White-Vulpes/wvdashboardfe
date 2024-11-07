import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ImagesView } from 'src/sections/images/view';

import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function Page({ nav }: any) {
  return (
    <>
      <Helmet>
        <title> {`Products - ${CONFIG.appName}`}</title>
      </Helmet>

      <ImagesView components={JSON.parse(nav.components)} />
    </>
  );
}

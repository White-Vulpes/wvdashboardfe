import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { MessageView } from 'src/sections/message/view';

// ----------------------------------------------------------------------

export default function Page({ nav }: any) {
  return (
    <>
      <Helmet>
        <title> {`Messages - ${CONFIG.appName}`}</title>
      </Helmet>

      <MessageView components={JSON.parse(nav.components)} />
    </>
  );
}

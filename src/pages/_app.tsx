import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';
import {NextIntlProvider} from 'next-intl';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
});

export default MyApp;

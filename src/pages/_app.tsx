import {memo} from 'react';
import {NextIntlProvider} from 'next-intl';
import type {AppProps} from 'next/app';

import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
});

export default MyApp;

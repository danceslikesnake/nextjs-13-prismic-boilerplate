import '../styles/global.scss';

import { Provider } from 'react-redux';
import store from '../redux/store';
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href} {...props}>
          {...children}
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;

import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Imgs, NonLazyImgs } from '@myorg-next-imports/imgs';
// import { ImgsReactLib } from '@myorg-next-imports/imgs-react-lib';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-app!</title>
      </Head>
      <div className="app">
        <div>
          <Imgs imageName="nx-logo-white" />
          <NonLazyImgs />
        </div>
      </div>
    </>
  );
}

export default CustomApp;

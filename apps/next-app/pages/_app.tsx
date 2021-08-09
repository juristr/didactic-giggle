import { AppProps } from 'next/app';
import Head from 'next/head';
import abc from './nx-logo-white.svg';
import './styles.css';
import { Imgs } from '@myorg-next-imports/imgs';
import { ImgsReactLib } from '@myorg-next-imports/imgs-react-lib';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-app!</title>
      </Head>
      <div className="app">
        <header className="flex">
          {/* <NxLogo width="75" height="50" /> */}
          <img src={abc} />
          <h1>Welcome to next-app!</h1>
        </header>

        <Imgs />

        <ImgsReactLib />

        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;

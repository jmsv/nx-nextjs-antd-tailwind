import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';

import '../styles/antd.less';
import '../styles/tailwind.css';
import './styles.less';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nx-nextjs-antd-tailwind!</title>
      </Head>
      <div className="app mx-auto py-10">
        <header className="flex items-center justify-center bg-blue-900 text-white p-2 rounded-md">
          <NxLogo width="75" height="50" />
          <h1 className="text-white m-0 text-center text-2xl pl-2">
            Welcome to nx-nextjs-antd-tailwind!
          </h1>
        </header>
        <main className="mx-8">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;

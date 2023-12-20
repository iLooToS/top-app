/* eslint-disable no-mixed-spaces-and-tabs */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
	  <Head>
		  <title>MyTop - наш лучший топ</title>
		  <link rel="icon" href="/favicon.ico" />
		  <link rel="preconnect" href="https://fonts.googleapis.com"/>
			  <link rel="preconnect" href="https://fonts.gstatic.com"/>
				  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;1,700&display=swap" rel="stylesheet"/>
	  </Head>
   <Component {...pageProps} />
   </>;
}


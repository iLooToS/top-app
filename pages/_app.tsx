/* eslint-disable no-mixed-spaces-and-tabs */
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import React from "react";
import ym from "react-yandex-metrika";
import { YMInitializer } from "react-yandex-metrika";

Router.events.on("routeChangeComplete", (url: string) => {
  if (typeof window !== "undefined") {
    ym("hit", url);
  }
});

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;1,700&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Component {...pageProps} />
    </>
  );
}

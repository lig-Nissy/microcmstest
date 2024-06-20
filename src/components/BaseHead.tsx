// BASE HEAD COMPONENT
import React from 'react';
import Head from 'next/head';

export const BaseHead = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        content="width=device-width,height=device-height,maximum-scale=1.0"
        name="viewport"
      />
      <link href="/sitemap-index.xml" rel="sitemap" />
      {/* <link
        href="/pagefind/pagefind-ui.css"
        rel="stylesheet"
      />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      {/* <script src="/pagefind/pagefind-ui.js" />  */}

      {/* Primary Meta Tags */}
      <title>にっしーの日報まとめ</title>
      <meta name="title" content="日報まとめ" />
      <meta
        name="description"
        content="株式会社LIG 新米エンジニアにっしーの日報をまとめたブログです。たまに日報以外のことも呟きます。"
      />
    </Head>
  );
};

export default BaseHead;

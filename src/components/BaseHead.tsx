// BASE HEAD COMPONENT
import React from "react";
import Head from "next/head";

export const BaseHead = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta content="width=device-width,height=device-height,maximum-scale=1.0" name="viewport" />
      <link href="/sitemap-index.xml" rel="sitemap" />
      {/* {favicon && <link href={favicon.url} rel="icon" />}
      {appleTouchIcon && (
        <link href={appleTouchIcon.url} rel="apple-touch-icon" />
      )} */}
      {/* {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={currentUrl} /> */}

      {/* Primary Meta Tags */}
      <title>にっしーの日報まとめ</title>
      <meta name="title" content="日報まとめ" />
      <meta
        name="description"
        content="株式会社LIG 新人エンジニアにっしーの日報をまとめたブログです。たまに日報以外のことも呟きます。"
      />

      {/* OGP / Facebook */}
      {/* <meta property="og:site_name" content={title} />
       <meta property="og:type" content={ogType} />
       <meta property="og:url" content={currentUrl} />
       <meta property="og:title" content={title} />
       <meta property="og:description" content={description} />
       {ogImage && <meta property="og:image" content={ogImage.url} />} */}

      {/* Twitter */}
      {/* <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {ogImage && <meta property="twitter:image" content={ogImage.url} />} */}
    </Head>
  );
};

export default BaseHead;

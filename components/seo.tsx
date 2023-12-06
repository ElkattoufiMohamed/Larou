import React from "react";
import Head from "next/head";
export default function seo() {
  return (
    <Head>
      <title>LAROU — COMPANY WEBSITE</title>
      <meta name="title" content="LAROU — COMPANY WEBSITE" />
      <meta
        name="description"
        content="Larou — Promotional Campaign, Business Development, Event Representation"
      />
      <meta name="twitter:title" content="LAROU — COMPANY WEBSITE" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="alternate" href="https://larou.fr" hrefLang="x-default" />
      <link rel="canonical" href="https://larou.fr" />
      <link
        rel="shortcut icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="shortcut  icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="twitter:description"
        content="Larou — Promotional Campaign, Business Development, Event Representation"
      />
      <meta property="og:title" content="LAROU — COMPANY WEBSITE" />
      <meta
        property="og:description"
        content="Larou — Promotional Campaign, Business Development, Event Representation"
      />
      <meta name="twitter:image" content="/handshake.png" />
      <meta name="twitter:image:alt" content="Larou" />

      <meta property="og:site_name" content="Larou" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:alt" content="Larou" />
      <meta property="og:url" content="https://larou.fr" />
      <meta property="og:image" content="/handshake.png" />
      <meta property="og:image:secure_url" content="/handshake.png" />
      <meta property="og:image:width" content="479" />
      <meta property="og:image:height" content="314" />
    </Head>
  );
}

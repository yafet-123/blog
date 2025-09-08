import Head from "next/head";
import React from "react";

export const MainHeader = ({ title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description || "Read our latest articles, travel tips, and inspiring stories from Ethiopia."}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description || "Read our latest articles, travel tips, and inspiring stories from Ethiopia."}
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://hulu12com.wordpress.com" />
        <meta property="og:type" content="website" />

        {/* Favicon / App Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
    </div>
  );
};

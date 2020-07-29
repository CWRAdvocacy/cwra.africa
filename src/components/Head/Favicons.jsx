import Head from 'next/head';

export const Favicons = () => (
  <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" key="favicon_apple" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" key="favicon_icon_32" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" key="favicon_icon_16" />
    <link rel="manifest" href="/images/favicons/site.webmanifest" key="favicon_manifest" />
    <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#0d78d3" key="favicon_maskIcon" />
    <link rel="shortcut icon" href="/images/favicons/favicon.ico" key="favicon_shortcutIcon" />
    <meta name="msapplication-TileColor" content="#0d78d3" key="favicon_msTileColor" />
    <meta name="msapplication-config" content="/images/favicons/browserconfig.xml" key="favicon_msAppConfig" />
    <meta name="theme-color" content="#ffffff" key="favicon_themeColor" />
  </Head>
);

export default Favicons;

import Head from 'next/head'

const Favicons = () => (
  <div>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png"/>
      <link rel="manifest" href="/images/favicons/site.webmanifest"/>
      <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#0d78d3"/>
      <link rel="shortcut icon" href="/images/favicons/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#0d78d3"/>
      <meta name="msapplication-config" content="/images/favicons/browserconfig.xml"/>
      <meta name="theme-color" content="#ffffff"/>
    </Head>
  </div>
)

export default Favicons;

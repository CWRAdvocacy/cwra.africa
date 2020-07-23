import Head from 'next/head';

const OpenGraph = () => (
  <Head>
    <meta property="og:title" content="The Center for Women's Rights Advocacy (CWRA)" key="og_title" />
    <meta property="og:type" content="website" key="og_type" />
    <meta property="og:url" content="https://cwra.africa/" key="og_url" />
    <meta property="og:image" content="https://cwra.africa/images/banners/home.jpg" key="og_image" />
    <meta property="og:description" content="CWRA is a non-profit organisation that seeks to promote gender equality by challenging harmful cultural practices and institutional norms at the root of all forms of violence against women and girls." key="og_description"/>
  </Head>
)

export default OpenGraph;

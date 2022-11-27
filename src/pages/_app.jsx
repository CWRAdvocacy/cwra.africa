/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { useRouter } from 'next/router';
import { OpenGraph as HeadOpenGraph } from '../components/Head/OpenGraph';
import { Favicons as HeadFavicons } from '../components/Head/Favicons';
import { Title as HeadTitle } from '../components/Head/Title';
import { analytics } from '../utils/firebase';
import theme from '../theme';

require('typeface-playfair-display');
require('typeface-roboto');

export default function MyApp(props) {
  const { Component, pageProps } = props;

  // Material-UI
  // Remove the server-side injected CSS.
  // eslint-disable-next-line no-undef
  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // Firebase Analytics
  const routers = useRouter();
  React.useEffect(() => {
    const logEvent = (url) => {
      analytics().setCurrentScreen(url);
      analytics().logEvent('page_view');
    };

    routers.events.on('routeChangeComplete', logEvent);
    // For First Page
    // eslint-disable-next-line no-undef
    logEvent(window.location.pathname);

    // Remvove Event Listener after un-mount
    return () => {
      routers.events.off('routeChangeComplete', logEvent);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeadTitle />
      <HeadFavicons />
      <HeadOpenGraph />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="facebook-domain-verification" content="x47uhdsz1xrnaxq2qtbhc64eykf7e2" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

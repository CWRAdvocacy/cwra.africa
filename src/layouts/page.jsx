import {
  Box,
  Container,
  Divider,
  Typography,
  createMuiTheme,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Head from 'next/head';
import BaseLayout from './base';

const theme = createMuiTheme();

export default function PageLayout({ title, children }) {
  return (
    <BaseLayout>
      <Head>
        <title>{title} - Center for Women&apos;s Rights Advocacy (CWRA)</title>
      </Head>
      <Container maxWidth="md">
        <Box pt={9}>
          <Typography variant="h4" component="h1" paragraph>
            {title}
          </Typography>
        </Box>
        <Divider style={{ marginTop: theme.spacing(1) }} />
        <Box pt={4} pb={9}>
          {children}
        </Box>
      </Container>
    </BaseLayout>
  );
}

PageLayout.defaultProps = {
  title: 'Page Title',
  children: 'Some contentnt',
};

PageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

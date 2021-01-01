import {
  Box,
  Container,
  Divider,
  Typography,
  createMuiTheme,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import BaseLayout from './base';

const theme = createMuiTheme();

export default function PageLayout({ title, children }) {
  return (
    <BaseLayout>
      <Container maxWidth="md">
        <Box pt={5}>
          <Typography variant="h4" component="h1" paragraph>
            {title}
          </Typography>
        </Box>
        <Divider style={{ marginBottom: theme.spacing(1) }} />
        <Box pt={2} pb={5}>
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

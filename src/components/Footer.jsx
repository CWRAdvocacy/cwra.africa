const {
  Container, Box, Grid, Typography, Link,
} = require('@material-ui/core');

const Footer = () => (
  <footer>
    <Container>
      <Box borderTop={1} borderColor="grey.500" py={4}>
        <Grid container>
          <Grid item xs={6}>
            <Typography>
              © 2020 Center for Women&apos;s Rights Advocacy
            </Typography>
          </Grid>
          <Grid item xs={6} align="right">
            <Link>Facebook</Link>
            {' . '}
            <Link>Twitter</Link>
            {' . '}
            <Link>LinkedIn</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </footer>
);

export default Footer;

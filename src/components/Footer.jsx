import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Box, Grid, Typography, Divider,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { CwraTreeIcon } from './icons/CwraTreeIcon';

const useStyles = makeStyles(() => ({
  title: {
    fontFamily: 'Playfair Display',
    fontWeight: 'bold',
  },
  icons: {
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Container>
        <Box pt={4} pb={2}>
          <Grid container>
            <Grid item xs={12} sm="auto">
              <Grid container spacing={1} justify="center">
                <Grid item>
                  <CwraTreeIcon style={{ color: 'inherit' }} fontSize="large" />
                </Grid>
                <Grid item>
                  <Typography variant="h5" align="center" className={classes.title}>
                    CWRA
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm>
              <Typography align="center">
                ...
              </Typography>
            </Grid>
            <Grid item xs={12} sm="auto" className={classes.icons}>
              <IconButton href="https://facebook.com/CWRAdvocacy" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://twitter.com/CWRAdvocacy" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/company/cwradvocacy" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box pt={3} pb={4} align="center">
          <Typography variant="caption">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Center for Women&apos;s Rights Advocacy
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;

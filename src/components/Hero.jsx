/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    borderColor: '#ffffff',
    color: '#ffffff',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Box bgcolor="primary.main" color="white">
      <Hidden smDown>
        <Box pt={1} />
      </Hidden>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Container>
            <Box py={2}>
              <picture>
                <source
                  srcSet="./images/events/2019_09_narok/DSC_5586.webp"
                  type="image/webp"
                  style={{ maxWidth: '100%' }}
                />
                <source
                  srcSet="./images/events/2019_09_narok/DSC_5586.jpg"
                  type="image/jpeg"
                  style={{ maxWidth: '100%' }}
                />
                <img
                  src="./images/events/2019_09_narok/DSC_5586.jpg"
                  style={{ maxWidth: '100%' }}
                  alt="Narok, Sep 2019 - Session With Mums"
                />
              </picture>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Container>
            <Box py={2}>
              <Typography variant="h5" gutterBottom>
                About CWRA
              </Typography>
              <Typography paragraph>
                The Center for Women’s Rights and Advocacy (CWRA) is a
                non-profit organisation that seeks to promote gender equality by
                challenging harmful cultural practices and institutional norms
                at the root of all forms of violence against women and girls.
              </Typography>
              <Typography paragraph>
                We envision a society where women and girls live their lives
                free of violence from public or private sources, so as to enjoy
                equal opportunities in social, economic, cultural, civil and
                political life.
              </Typography>
              {/* <Button
                className={classes.button}
                variant="outlined"
                size="large"
                href="mailto:hello@cwra.africa"
                target="_blank"
              >
                Get in touch
              </Button> */}
            </Box>
          </Container>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Box pb={4} />
      </Hidden>
    </Box>
  );
}

/* eslint-disable no-unused-vars */
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Hidden  from '@mui/material/Hidden';


export default function Hero() {

  return (
    <Box bgcolor="primary.main" color="white" pt={4} pb={4}>
      <Hidden mdDown>
        <Box pt={1} />
      </Hidden>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Container>
            <Box py={4}>
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
            </Box>
          </Container>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Box pb={4} />
      </Hidden>
    </Box>
  );
}

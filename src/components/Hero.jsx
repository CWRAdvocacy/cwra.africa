import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export const Hero = () => (
  <Box bgcolor="primary.main" color="white" py={5}>
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} sm={6} md={4}>
        <Container>
          <img src="/images/events/2019_09_narok/DSC_5586.jpg" style={{ maxWidth: '100%' }} alt="Narok, Sep 2019 - Session With Mums" />
        </Container>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Container>
          <Typography variant="h5" gutterBottom>About CWRA</Typography>
          <Typography paragraph>
            The Center for Women’s Rights and Advocacy (CWRA) is a non-profit organisation that seeks to promote gender equality by challenging harmful cultural practices and institutional norms at the root of all forms of violence against women and girls.
          </Typography>
          <Typography paragraph>
            We envision a society where women and girls live their lives free of violence from public or private sources, so as to enjoy equal opportunities in social, economic, cultural, civil and political life.
          </Typography>
        </Container>
      </Grid>
    </Grid>
  </Box>
);

export default Hero;

import {
  Grid, Container, Box, Typography,
} from '@material-ui/core';
import { Bio } from './Bio';

export const Executive = () => {
  const executiveTeam = [
    {
      name: 'Milanoi Koiyiet',
      imageUrl: '/images/team/milanoi.jpg',
      position: 'Co-founder',
      brief: 'Milanoi is a human rights lawyer with over nine years’ experience in women’s rights, children’s rights and disability rights. She has worked with non-profit organisations, advocating for the rights of women and children to live a life free from violence. She has made presentations calling on ending violence against women and girls with disabilities at the United Nations Commission on Status of Women and United Nations Conference of State Parties on the Convention on the Rights of Persons with Disabilities.',
    },
    {
      name: 'Ruth Nekura, PhD',
      imageUrl: '/images/team/ruth.jpg',
      position: 'Co-founder',
      brief: 'Dr. Ruth Nekura is a feminist human rights lawyer/researcher with over 8 years experience in gender equality and women\'s rights, violence against women laws and interventions, program management and evaluation, service integration and social protection. Expertise in legal analysis, research, advocacy, policy reform, multi-sector implementation strategies and qualitative methodologies.',
    },
  ];

  const teamBios = executiveTeam.map((member) => (
    <Grid item xs={12} sm={6} key={member.name}>
      <Box p={3}>
        <Bio
          name={member.name}
          imageUrl={member.imageUrl}
          position={member.position}
          brief={member.brief}
        />
      </Box>
    </Grid>
  ));

  return (
    <Box pt={5} pb={3}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>Our Team</Typography>
        <Grid container>
          {teamBios}
        </Grid>
      </Container>
    </Box>
  );
};

export default Executive;

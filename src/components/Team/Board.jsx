import {
  Box, Container, Typography, Grid,
} from '@mui/material';
import { Bio } from './Bio';

export const boardBios = [
  {
    name: 'Suzanne',
    fullName: 'Suzanne Kidenda ',
    position: 'Chair',
    positionLong: 'Board Chairperson (Mental Health Expert)',
    currentJob: 'Program Manager, Physicians for Human Rights, Kenya',
  },
  {
    name: 'Dr. Kamundia',
    fullName: 'Board Member (Human Rights/Disability Rights Expert)',
    position: 'Secretary',
    positionLong: 'Board Member (Human Rights/Disability Rights Expert)',
    currentJob:
      'Assistant Director: Research, Advocacy and Outreach at the Kenya National Commission on Human Rights',
  },
  {
    name: 'Yiantet',
    fullName: 'Sylvia Yiantet',
    position: 'Member',
    positionLong: 'Board Member (Legal/NPO systems expert)',
    currentJob: 'Programs Manager, Legal Resources Foundation.',
  },
  {
    name: 'Naipanoi',
    fullName: 'Teresia Naipano',
    position: 'Member',
    positionLong:
      'Board Member. (Community engagement expert) Rural woman representing the interests of community women.',
    currentJob: 'Subsistence farmer',
  },
  {
    name: 'Sintalo',
    fullName: 'Felistus Sintalo',
    position: 'Treasurer',
    positionLong: 'Board Treasurer (Financial Systems Strategist)',
    currentJob:
      'Operations and Finance Manage at Shona Export Processing Zone Company',
  },
  {
    name: 'Dr. Ruth',
    fullName: 'Dr. Ruth Nekura',
    position: 'Secretary',
    positionLong: 'Board Treasurer (Financial Systems Strategist)',
    currentJob: 'Co-founder CWRA',
  },
];

function Board() {
  const boardMembers = boardBios.slice(0, 5).map((member) => (
    <Grid item xs={6} sm={3} md={2} key={member.name}>
      <Bio name={member.name} position={member.position} />
    </Grid>
  ));

  return (
    <Box pb={9} pt={3}>
      <Container>
        <Typography variant="h5" align="center" gutterBottom paragraph>
          Our Board
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {boardMembers}
        </Grid>
      </Container>
    </Box>
  );
}

export default Board;

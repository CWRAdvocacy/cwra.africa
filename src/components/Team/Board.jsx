import {
  Box, Container, Typography, Grid,
} from '@material-ui/core';
import { Bio } from './Bio';

const Board = () => {
  const boardBios = [
    {
      name: 'Board One',
      position: 'Position',
    },
    {
      name: 'Board Two',
      position: 'Position',
    },
  ];

  const boardMembers = boardBios.map((member) => (
    <Grid item xs={6} sm={3} md={2} key={member.name}>
      <Bio name={member.name} position={member.position} />
    </Grid>
  ));

  return (
    <Box>
      <Container>
        <Typography variant="h5" align="center" gutterBottom paragraph>Our Board</Typography>
        <Grid container spacing={2} justify="center">
          {boardMembers}
        </Grid>
      </Container>
    </Box>
  );
};

export default Board;

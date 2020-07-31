import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { CwraTreeIcon } from '../icons/CwraTreeIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  medium: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

export const Bio = ({
  imageUrl, name, position, brief,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Avatar alt={name} src={imageUrl} className={classes.large}>
        <CwraTreeIcon className={classes.medium} />
      </Avatar>
      <Typography variant="h6">{name}</Typography>
      <Typography color="secondary" paragraph>{position}</Typography>
      <Typography paragraph align="center">{brief}</Typography>
    </Box>
  );
};

Bio.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  brief: PropTypes.string,
};

Bio.defaultProps = {
  imageUrl: '',
  name: '',
  position: '',
  brief: '',
};

export default Bio;

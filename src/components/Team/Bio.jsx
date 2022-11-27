import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HttpIcon from '@mui/icons-material/Http';

import { IconButton } from '@mui/material';
import CwraTreeIcon from '../icons/CwraTreeIcon';

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
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

export function Bio({
  imageUrl, name, position, brief, linkedIn, twitter, website,
}) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Avatar alt={name} src={imageUrl} className={classes.large}>
        <CwraTreeIcon className={classes.medium} />
      </Avatar>
      <Typography variant="h6">{name}</Typography>
      <Typography color="secondary">
        {position}
      </Typography>

      {/* socials */}
      {(!!linkedIn || !!twitter || !!website) && (
        <Stack direction="row" spacing={0.5}>
          {!!linkedIn && (
            <IconButton
              aria-label="LinkedIn"
              component="a"
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <LinkedInIcon color="primary" />
            </IconButton>
          )}
          {!!twitter && (
            <IconButton
              aria-label="Twitter"
              component="a"
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon color="primary" />
            </IconButton>
          )}
          {!!website && (
            <IconButton
              aria-label="Website"
              component="a"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HttpIcon color="primary" />
            </IconButton>
          )}
        </Stack>
      )}
      <Typography paragraph align="center" sx={{ my: 1 }}>
        {brief}
      </Typography>
    </Box>
  );
}

Bio.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  brief: PropTypes.string,
  linkedIn: PropTypes.string,
  twitter: PropTypes.string,
  website: PropTypes.string,
};

Bio.defaultProps = {
  imageUrl: '',
  name: '',
  position: '',
  brief: '',
  linkedIn: '',
  twitter: '',
  website: '',
};

export default Bio;

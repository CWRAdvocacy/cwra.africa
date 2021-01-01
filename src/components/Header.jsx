import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Box } from '@material-ui/core';
import { CwraTreeIcon } from './icons/CwraTreeIcon';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Playfair Display'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <CwraTreeIcon style={{ color: '#ffffff' }} />
          {/* <img src="./images/logo/tree.svg" height="24px" /> */}
          <Box width="7px" />
          {/* <img src="./images/logo/acronym.svg" height="18px" /> */}
          <Typography variant="h6" className={classes.title} noWrap>
            Center for Women&apos;s Rights Advocacy
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

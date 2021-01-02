import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { IconButton } from '@material-ui/core';
import { CwraTreeIcon } from './icons/CwraTreeIcon';
import Link from './Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Playfair Display',
    color: '#fff',
    maxWidth: '80vw'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Link href="/">
            <IconButton edge="start" color="inherit">
              <CwraTreeIcon style={{ color: '#ffffff' }} />
            </IconButton>
          </Link>
          <Link href="/">
            <Typography variant="h6" className={classes.title} noWrap>
              Center for Women&apos;s Rights Advocacy
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

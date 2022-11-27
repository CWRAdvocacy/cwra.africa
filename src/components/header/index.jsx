import PropTypes from 'prop-types';

import makeStyles from '@mui/styles/makeStyles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

import CwraTreeIcon from '../icons/CwraTreeIcon';
import DrawerButton from './Drawer';

import Link from '../Link';

const useStyles = makeStyles((theme) => ({
  drawerButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  titleLink: {
    textDecoration: 'none !important',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    minWidth: 0,
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: 'Playfair Display',
    marginLeft: theme.spacing(1),
  },
  appBarLinksList: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  appBarLinksListItem: {
    minHeight: '64px',
    textDecoration: 'none !important',
    color: 'inherit',
  },
}));

function AppBarLinks({ links }) {
  const classes = useStyles();

  const linksList = links.map((link) => (
    <ListItem
      key={link.url}
      button
      component={Link}
      href={link.url}
      className={classes.appBarLinksListItem}
      color="inherit"
    >
      <ListItemText primary={<Typography noWrap>{link.title}</Typography>} />
    </ListItem>
  ));

  return (
    <List component="nav" className={classes.appBarLinksList}>
      {linksList}
    </List>
  );
}

AppBarLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default function ButtonAppBar() {
  const classes = useStyles();
  const acronymTitle = useMediaQuery('(max-width:470px)');

  const links = [
    { title: 'Home', url: '/' },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {/* Drawer */}
          <DrawerButton className={classes.drawerButton} links={links} />

          {/* Logo Link */}
          <Link href="/" color="inherit" className={classes.titleLink}>
            <CwraTreeIcon />
            <Typography variant="h6" className={classes.title} noWrap>
              {acronymTitle ? 'CWRA' : "Center for Women's Rights Advocacy"}
            </Typography>
          </Link>

          {/* Links */}
          <AppBarLinks links={links} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

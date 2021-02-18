import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';

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
    flexWrap: 'wrap',
    flexGrow: 1,
    maxWidth: '100%',
    paddingRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    flexBasis: 0,
    fontFamily: 'Playfair Display',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
  appBarLinksList: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  appBarLinksListItem: {
    minHeight: '64px',
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
    <>
      <List component="nav" className={classes.appBarLinksList}>
        {linksList}
      </List>
    </>
  );
}

export default function ButtonAppBar() {
  const classes = useStyles();

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
              Center for Women&apos;s Rights Advocacy
            </Typography>
          </Link>

          {/* Links */}
          <AppBarLinks links={links} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

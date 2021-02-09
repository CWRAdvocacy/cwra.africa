import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';

import DonateButton from './DonateDialog';
import DrawerButton from './Drawer';

import Link from '../Link';

const useStyles = makeStyles(theme => ({
  drawerButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Playfair Display',
    paddingRight: theme.spacing(2)
  },
  titleLink: {
    textDecoration: 'none !important'
  },
  appBarLinksList: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  appBarLinksListItem: {
    minHeight: '64px'
  }
}));

function AppBarLinks({ links }) {
  const classes = useStyles();

  const linksList = links.map(link => (
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
      url: '/about'
    },
    {
      title: 'Contact Us',
      url: '/contact-us'
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {/* Drawer */}
          <DrawerButton className={classes.drawerButton} links={links} />

          {/* Logo */}
          <Typography variant="h6" className={classes.title} noWrap>
            <Link href="/" color="inherit" className={classes.titleLink}>
              Center for Women&apos;s Rights Advocacy
            </Link>
          </Typography>

          {/* Links */}
          <AppBarLinks links={links} />

          {/* Donate Button */}
          <DonateButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

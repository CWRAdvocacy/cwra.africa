import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { DonateDialog } from './DonateDialog';

import Link from '../Link';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

export default function MainDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = openDrawer => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(openDrawer);
  };

  const [openDonateDialog, setOpenDonateDialog] = React.useState(false);
  const handleClickOpenDonateDialog = () => {
    setOpenDonateDialog(true);
  };
  const handleCloseDonateDialog = () => {
    setOpenDonateDialog(false);
  };

  const listLinks = links => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {links.map(link => (
          <ListItem
            key={link.url}
            button
            component={Link}
            href={link.url}
            color="inherit"
          >
            <ListItemText primary={link.title} />
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        <ListItem button onClick={handleClickOpenDonateDialog}>
          <ListItemText primary="Donate" />
        </ListItem>
      </List> */}
    </div>
  );

  return (
    <>
      {/* Button */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        edge="start"
        className={clsx(classes.menuButton, props.className)}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {listLinks(props.links)}
      </Drawer>

      {/* Donate Dialog */}
      {/* <DonateDialog open={openDonateDialog} onClose={handleCloseDonateDialog} /> */}
    </>
  );
}

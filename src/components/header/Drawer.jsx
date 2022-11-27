/* eslint-disable react/destructuring-assignment */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import makeStyles from '@mui/styles/makeStyles';
import {
  Drawer, List, ListItem, ListItemText,
} from '@mui/material';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Link from '../Link';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MainDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (openDrawer) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(openDrawer);
  };

  const listLinks = (links) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {links.map((link) => (
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
        size="large"
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {listLinks(props.links)}
      </Drawer>
    </>
  );
}

MainDrawer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string.isRequired,
};

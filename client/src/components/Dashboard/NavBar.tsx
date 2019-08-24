import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';

export const NavBar = () => {
  const useStyles = makeStyles((theme:Theme) => ({
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
  }));
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={clsx(classes.appBar && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}></Toolbar>
    </AppBar>
  )
}
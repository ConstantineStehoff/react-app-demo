import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, Badge, makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

interface Props {
    drawerWidth: number;
}

export default class NavBar extends React.Component<Props, {}> {
    render(){
        const useStyles = makeStyles((theme:Theme) => ({
            toolbar: {
              paddingRight: 24, // keep right padding when drawer closed
            },
            toolbarIcon: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '0 8px',
              ...theme.mixins.toolbar,
            },
            appBar: {
              zIndex: theme.zIndex.drawer + 1,
              transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            },
            appBarShift: {
              marginLeft: this.props.drawerWidth,
              width: `calc(100% - ${this.props.drawerWidth}px)`,
              transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            },
            menuButton: {
              marginRight: 36,
            },
            menuButtonHidden: {
              display: 'none',
            },
            title: {
              flexGrow: 1,
            },
        }));
        const classes = useStyles();
        return (
            <div>
                <AppBar position="absolute" className={clsx(classes.appBar && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        className={clsx(classes.menuButton && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Demo React App
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
    
}
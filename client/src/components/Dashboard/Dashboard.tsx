import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Venues from './Venues';
import { TextField, Button } from '@material-ui/core';
import { getPlaces } from '../../store/Dashboard/actions';
import { getPlacesPending, getPlacesError, getPlacesSuccess } from '../../store/Dashboard/reducers';
import { State } from '../../store/rootReducer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavBar } from './NavBar';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
        React Demo App
    </Typography>
  );
}

const useStyles = makeStyles((theme:Theme) => ({
  root: {
    display: 'flex',
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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Dashboard = (props:any) => {
  const classes = useStyles();
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
            <Button onClick={props.getPlaces}>
              Trigger api call
            </Button>
            
            <TextField
                id="standard-full-width"
                label="Search"
                style={{ marginBottom: 16 }}
                placeholder="Type a place that you are looking for"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            />
            
            <Grid container spacing={2}>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Venues />
                    </Paper>
                </Grid>
                {/* Chart */}
                <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    
                </Paper>
                </Grid>
            </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    error: getPlacesError(state.app),
    places: getPlacesSuccess(state.app),
    pending: getPlacesPending(state.app)
  };
};

const mapDispatchToProps = (dispatch:any) => bindActionCreators({
  getPlaces: getPlaces
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

// export default Dashboard;
import React from 'react';
import { connect } from 'react-redux';
import { getPlaces } from '../redux/actionCreators';
import { Venues } from './Venues';
import Title from './Title';
import { makeStyles } from '@material-ui/core';
import {
  Container,
  CssBaseline,
  Button,
  Grid,
  Paper
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { Copyright } from './Copyright';

const styles = makeStyles((theme) => ({
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
  textField: {
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const validate = values => {
  const errors = {};
  if (!values.city) {
    errors.city = 'Required';
  }
  if (!values.state) {
    errors.state = 'Required';
  }
  if (!values.state) {
    errors.searchTerm = 'Required';
  }
  return errors;
};

const App = (props) => {
    const classes = styles();
    const { onSubmit } = props;
    const places = props.places.places;

    return props.loading ? <div>Loading...</div> : (
      <div className="App">
        <CssBaseline />

        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
          <Form
            onSubmit={onSubmit}
            initialValues={{ city: '', state: '', searchTerm: '' }}
            validate={validate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16 }}>
                <Title>Search Form</Title>
                <Grid container alignItems="flex-start" spacing={8}>
                <Grid item xs={12}>
                    <Field
                      fullWidth
                      required
                      name="searchTerm"
                      component={TextField}
                      type="text"
                      label="Search Term"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="city"
                      component={TextField}
                      type="text"
                      label="City"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="state"
                      component={TextField}
                      type="text"
                      label="State"
                    />
                  </Grid>
                  <Grid item style={{ marginTop: 8 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                    >
                      Search
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Venues venues={places} />
                  </Grid>
                </Grid>
              </Paper>
            </form>
            )}
            />
          </Container>
          <Copyright name="React Demo App"/>
        </main>
      </div>
    )
  }


const mapStateToProps = (state) => {
  return {
    places: state.places,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: async values => dispatch(getPlaces(values.city, values.state, values.searchTerm))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
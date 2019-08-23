import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLogo } from '../../store/App/actions';
import { State } from '../../store/rootReducer';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar';
import Dashboard from '../Dashboard';

const logo = require('../../assets/logo.svg');

interface DispatchProps {
  toggleLogo: () => void;
  showLogo: Boolean;
}

const Home = ({ toggleLogo, showLogo }: DispatchProps) => {
  return (
    <div>
      {/* <NavBar />
      <Button variant="contained" color="primary" onClick={toggleLogo}>
        Toggle Logo!
      </Button>
      {showLogo ? <img src={logo} /> : null} */}

      <Dashboard />

    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    showLogo: state.app.showLogo
  };
};

export default connect(
  mapStateToProps,
  { toggleLogo }
)(Home);

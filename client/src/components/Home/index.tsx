import React from 'react';
// import { connect } from 'react-redux';
// import { toggleLogo } from '../../store/App/actions';
// import { State } from '../../store/rootReducer';
// import Button from '@material-ui/core/Button';
import Dashboard from '../Dashboard/Dashboard';

// const logo = require('../../assets/logo.svg');

interface DispatchProps {
  toggleLogo: () => void;
  showLogo: Boolean;
}

const Home = (props: any) => {
  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={props.toggleLogo}>
        Toggle Logo!
      </Button>
      {props.showLogo ? <img src={logo} alt="logo"/> : null} */}

      <Dashboard props={props}/>

    </div>
  );
};

// const mapStateToProps = (state: State) => {
//   return {
//     showLogo: state.app.showLogo
//   };
// };

// export default connect(
//   mapStateToProps,
//   { toggleLogo }
// )(Home);

export default Home;

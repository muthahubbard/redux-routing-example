import React from 'react';
import { connect } from 'react-redux';

import { User }  from './User';
import { setName } from '../actions/userActions.js';

const App = ({user, setName}) => (
  <User user={user} setName={setName} />
);
  
const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
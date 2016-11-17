import React from 'react';
import { connect } from 'react-redux';

import { User }  from './User';
import { setName } from '../actions/userActions.js';

// filter
// should we add this to state via action?
const getUser = (user, seoName) => {
  console.log('ajsiasijaijsiajsijij');
  console.log(user);
  console.log(seoName);

  // couls dispatch action here?

  return {
    ...user,
    name: seoName
  };
};

// params passed by Router
const App = ({user, setName, params}) => (
  <User user={user} seoName={params.seoname} setName={setName} />
);

const mapStateToProps = (state, ownProps) => ({
  user: getUser(
    state.userReducer,
    ownProps.params.seoname
  ),
});


// const mapStateToProps = (state) => {
//   return {
//     user: state.userReducer
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
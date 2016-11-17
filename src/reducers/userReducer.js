
import { SET_NAME } from '../actions/userActions';

const initialState = {
  name: 'Bob',
  age: 36
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      state = {
        ...state,
        name: action.payload,
      };
      return state;
    
    default:
      return state;
  }
}; 

export default userReducer;
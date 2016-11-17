import { ADD, SUBTRACT } from '../actions/mathActions';

const initialState = {
  result: 1,
  lastValues: []
};

const mathReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      state = {
        // using spread rather than object.assign
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload] // return new array by copying values using spread
      };
      return state;
    case SUBTRACT:
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      return state;
    default:
      return state;
  }
};

export default mathReducer;
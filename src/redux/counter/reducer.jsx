import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET } from "./actionTypes";
const initialState = {
  count: 0,
};
const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return {
        ...state,
      };
  }
};
export default CountReducer;

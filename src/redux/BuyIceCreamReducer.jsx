import { BUY_ICE_CREAM } from "./ActionTypes";
const initialState = {
  numberOfIceCream: 20,
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return {
        ...state,
      };
  }
};
export default IceCreamReducer;

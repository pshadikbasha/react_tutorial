import { BUY_ICE_CREAM } from "./ActoinTypes";

const initialState = {
  noOfIceCreams: 33,
};
const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams + 1,
      };
    default:
      return {
        ...state,
      };
  }
};
export default IceCreamReducer;

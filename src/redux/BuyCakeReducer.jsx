import { BUY_CAKE } from "./ActionTypes";
const initialState = {
  numberOfCake: 10,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      console.log("buy_Cake");
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      };
    default:
      return {
        ...state,
      };
  }
};
export default CakeReducer;

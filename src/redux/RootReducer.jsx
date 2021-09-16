import { combineReducers } from "redux";
import IceCreamReducer from "./BuyIceCreamReducer";
import CakeReducer from "./BuyCakeReducer";
import AsyncReducer from "./AsyncReducer";
const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
  asyncReducer: AsyncReducer,
});
export default rootReducer;

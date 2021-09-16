import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./Icecream/IcreCreamReducer";
import CountReducer from "./counter/reducer";
const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
  counter: CountReducer,
});
export default rootReducer;

import { createStore } from "redux";
import CakeReducer from "./cake/CakeReducer";
import rootReducer from "./RootReducer";
import { applyMiddleware } from "redux";

import logger from "redux-logger";
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;

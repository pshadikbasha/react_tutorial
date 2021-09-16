import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET } from "./actionTypes";
export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};
export const resetCounter = () => {
  return {
    type: RESET,
  };
};

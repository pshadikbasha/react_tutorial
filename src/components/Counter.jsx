import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../redux/counter/action";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter {count}</h2>
      <button onClick={() => dispatch(incrementCounter())}>Add</button>
      <button onClick={() => dispatch(decrementCounter())}>Sub</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
};
export default Counter;

import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/Icecream/Action";
const IceCream = () => {
  const noOfIceCreams = useSelector((state) => state.iceCream.noOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>No of Ice Creams {noOfIceCreams}</h3>
      <button onClick={() => dispatch(buyIceCream())}>ADD</button>
    </div>
  );
};
export default IceCream;

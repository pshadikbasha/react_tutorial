import { connect } from "react-redux";
import { buyCake } from "../redux/cake/CakeAction";
import { useSelector, useDispatch } from "react-redux";
const CakeContainer = (props) => {
  console.log("the_props_in_cakeContainer", props);
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>No of Cakes {noOfCakes} </h4>
      <button onClick={() => dispatch(buyCake())}>
        Click <menu></menu>
      </button>
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     noOfCakes: state.noOfCakes,
//   };
// };
// const maspDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };
// export default connect(mapStateToProps, maspDispatchToProps)(CakeContainer);

export default CakeContainer;

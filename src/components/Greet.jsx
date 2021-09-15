// const Greet = () => {
//   return (
//     <div>
//       <h3>greet compoentn</h3>
//     </div>
//   );
// };
import React from "react";
import Child from "./Child";
class Greet extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "shadk",
      isLoggedIn: false,
    };
  }
  handleNameChange = (data) => {
    this.setState({
      name: data,
    });
  };
  handleClick = () => {
    alert("hell shadik");
  };
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <Child handleClick={this.handleClick}></Child>
        ) : (
          "null"
        )}
      </div>
    );
  }
}
export default Greet;

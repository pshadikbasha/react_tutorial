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
        <Child handleClick={this.handleClick}></Child>
      </div>
    );
  }
}
export default Greet;

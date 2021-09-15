// const Greet = () => {
//   return (
//     <div>
//       <h3>greet compoentn</h3>
//     </div>
//   );
// };
import React from "react";
class Greet extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "shadik",
      counter: 0,
    };
  }
  handleChange = () => {
    this.setState({
      name: "basha",
    });
  };
  handleCounter = () => {
    console.log("hello wolrd");
    this.setState((prevCount) => ({
      counter: prevCount.counter + 1,
    }));
  };
  render() {
    return (
      <div>
        <h2>Welcome {this.state.name}</h2>
        <button onClick={this.handleChange}>Click Me</button>
        <h3>Counter= {this.state.counter}</h3>
        <button onClick={this.handleCounter}>Click Me</button>
      </div>
    );
  }
}
export default Greet;

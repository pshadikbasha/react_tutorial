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
      name: "shadk",
    };
  }
  handleNameChange = (data) => {
    this.setState({
      name: data,
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.handleNameChange("basha")}>Click me</button>
      </div>
    );
  }
}
export default Greet;

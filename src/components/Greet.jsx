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
  constructor(props) {
    super(props);
    this.state = {
      name: "shadk",
      isLoggedIn: false,
    };
    console.log("the vlauels", this.props);
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
        <h2>hello </h2>
      </div>
    );
  }
}
export default Greet;

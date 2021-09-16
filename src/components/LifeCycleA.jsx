import React from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("LifeCycleA_constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA_getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA ComponentDidMount");
  }
  render() {
    console.log("LifeCycleARenderMethod");
    return (
      <div>
        {/* <LifeCycleB></LifeCycleB> */}
        <h2>Count:{this.state.count}</h2>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }))
          }
        >
          Click Me
        </button>
      </div>
    );
  }
}
export default LifeCycleA;

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
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}
export default LifeCycleA;

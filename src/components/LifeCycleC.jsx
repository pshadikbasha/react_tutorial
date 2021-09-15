import React from "react";

class LifeCycleC extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("LifeCycleC_constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleC_getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleC ComponentDidMount");
  }
  render() {
    console.log("LifeCycleC RenderMethod");
    return <div></div>;
  }
}
export default LifeCycleC;

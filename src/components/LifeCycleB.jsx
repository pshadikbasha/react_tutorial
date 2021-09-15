import React from "react";

class LifeCycleB extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("LifeCycleB_constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB_getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB ComponentDidMount");
  }
  render() {
    console.log("LifeCycleBRenderMethod");
    return <div></div>;
  }
}
export default LifeCycleB;

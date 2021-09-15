import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onClick={() => props.handleClick()}>Button</button>
    </div>
  );
};
export default Child;

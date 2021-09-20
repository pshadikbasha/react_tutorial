import React from "react";

class Card extends React.Component {
  render() {
    return (
      <>
        <nav
          style={{
            backgroundColor: "red",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <a style={{ textDecoration: "none" }} href="/">
            ReactJs compoennts
          </a>
        </nav>
        <div
          style={{
            width: "200px",
            backgroundColor: "grey",
            padding: "20px",
            margin: "20px",
            boxShadow: "0 0 black",
          }}
        >
          <h2>class Based compoentn</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            voluptatibus esse illo deleniti illum ipsum amet praesentium aliquam
            accusamus earum.
          </p>
        </div>
      </>
    );
  }
}
export default Card;

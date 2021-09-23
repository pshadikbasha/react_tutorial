import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import Greet from "./components/Greet";
import Person from "./components/Person";
import LifeCycleA from "./components/LifeCycleA";
import LifeCycleC from "./components/LifeCycleC";
import CakeContainer from "./components/CakeContainer";
import IceCream from "./components/IceCreamContainer";
// import Counter from "./components/Counter.jsx";
import Counter from "./components/HooksComponents/Counter";
import Card from "./UiBrains/components/Card";
import Navbar from "./UiBrains/components/Navbar/Navbar";
import LandingPage from "./UiBrains/components/LandingPage/LandingPage";
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("the_logs_in_super", props);
    this.state = {
      product: {
        price: 1,
        name: "shadik",
      },
      name: "",
    };
  }
  updatePrice = (value) => {
    if (value === "+") {
      this.setState({
        product: {
          ...this.state.product,
          price: this.state.product.price + 1,
        },
      });
    } else if (value === "-") {
      this.setState({
        product: {
          ...this.state.product,
          price:
            this.state.product.price - 1 > 0 ? this.state.product.price - 1 : 1,
        },
      });
    }
  };
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <input
          type="text"
          name={this.state.name}
          id=""
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <p>{this.state.name}</p>
        <h3>name is{this.state.product.name}</h3>
        <h3>price {this.state.product.price}</h3>
        <button onClick={() => this.updatePrice("+")}>Add</button>
        <button onClick={() => this.updatePrice("-")}>Sub</button>
      </div>
    );
  }
}

export default App;

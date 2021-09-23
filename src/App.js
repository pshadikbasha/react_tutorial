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
  state = {
    message: "Hello",
  };
  sayGoodMorning = (value) => {
    this.setState({
      message: value,
    });
  };
  sayGoodAfternoon = () => {
    this.setState({
      message: "Hello GoodAfternoon",
    });
  };
  sayGoodEvening = () => {
    this.setState({
      message: "Hello GoodEvening",
    });
  };
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.sayGoodMorning("goood morning")}>
          Good Morning
        </button>
        <button onClick={this.sayGoodAfternoon}>Good Afternoon</button>
        <button onClick={this.sayGoodEvening}>Good Evening</button>
        <Card name="sadhik" />
      </div>
    );
  }
}

export default App;

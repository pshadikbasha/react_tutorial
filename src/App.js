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
import Counter from "./components/Counter.jsx";
class App extends React.Component {
  render() {
    return (
      <div>
        <CakeContainer></CakeContainer>
        <IceCream></IceCream>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;

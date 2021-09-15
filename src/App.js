import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import Greet from "./components/Greet";
class App extends React.Component {
  render() {
    return (
      <div>
        <Greet></Greet>
        {/* <Header></Header>
        <SideBar />
        <MainPage></MainPage>
        <div style={{ clear: "both" }}></div>
        <Footer></Footer> */}
      </div>
    );
  }
}

export default App;

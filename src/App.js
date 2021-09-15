import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import Greet from "./components/Greet";
import Person from "./components/Person";
class App extends React.Component {
  state = {
    data: [
      { id: 1, name: "shadik", position: "developer" },
      {
        id: 2,
        name: "koushik",
        position: "Accenture",
      },
      {
        id: 3,
        name: "kalyan",
        position: "Cognizant",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.data.map((person) => {
          return <Person name={person.name} position={person.position} />;
        })}
        {/* <Greet></Greet> */}
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

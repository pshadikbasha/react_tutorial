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
class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  handleFirstNamechange = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("the_values_in_form_=>", this.state);
    alert("the_form_values" + this.state.firstName);
  };
  render() {
    return (
      <div>
        {/* <LifeCycleA></LifeCycleA> */}
        <Greet value></Greet>
        {/* <LifeCycleC></LifeCycleC> */}
        {/* <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">FirstName</label>
          <br />
          <input
            type="text"
            name=""
            id=""
            value={this.state.firstName}
            onChange={this.handleFirstNamechange}
          />
          <br />
          <label htmlFor="">LastName</label>
          <input
            type="text"
            name=""
            id=""
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form> */}
        {/* {this.state.data.map((person) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              position={person.position}
            />
          );
        })} */}
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

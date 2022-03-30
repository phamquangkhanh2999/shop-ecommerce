import React, { Component } from "react";
import "./App.style.scss";
import Home from "./home/Home";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Home />
      </div>
    );
  }
}

export default App;

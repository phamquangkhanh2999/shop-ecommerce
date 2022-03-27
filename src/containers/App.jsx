import React, { Component } from "react";
import "./App.style.scss";
import Home from "./home/Home";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Home />
        <div
          style={{
            backgroundColor: "#e8ecf1",
            height: "150vh",
            position: "relative",
          }}
        >
          Pham quang
        </div>
      </div>
    );
  }
}

export default App;

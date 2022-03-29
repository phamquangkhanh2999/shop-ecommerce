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
            height: "200vh",
            position: "relative",
            marginTop: "50px",
          }}
        >
          Pham quang
        </div>
      </div>
    );
  }
}

export default App;

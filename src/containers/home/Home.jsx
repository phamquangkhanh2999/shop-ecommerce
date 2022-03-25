import React, { Component } from "react";
import Header from "../../components/header/Header";
import "./Home.style.scss";

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header />
      </div>
    );
  }
}

export default Home;

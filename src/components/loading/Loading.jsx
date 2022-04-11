import React, { Component } from "react";
import "./Loading.style.scss";

export default class Loading extends Component {
  render() {
    return (
      <div className='lds-wrapper'>
        <div class='lds-spinner'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

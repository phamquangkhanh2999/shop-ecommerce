import React, { Component } from "react";
import "./NotFound.style.scss";

import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div className='not-found'>
        <div className='not-found-bg'>
          <h1>404</h1>
          <p>PAGE NOT FOUND</p>
        </div>
        <div className='not-found-text'>
          <Link to='/'>Go Back</Link>
        </div>
      </div>
    );
  }
}

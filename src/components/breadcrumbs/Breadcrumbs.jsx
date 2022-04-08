import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Breadcrumbs.style.scss";

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pathLink } = this.props;

    return (
      <div className='breadcrumbs-title'>
        <h4 className='breadcrumbs-title-home'>
          <Link className='home-back' to='/'>
            Trang chủ
          </Link>
        </h4>
        <h4 className='breadcrumbs-title-text'>{pathLink}</h4>
      </div>
    );
  }
}

export default Breadcrumbs; // tao dung dan

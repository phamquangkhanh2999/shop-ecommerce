import React, { Component } from "react";
import "./Banner.style.scss";
import Banner1 from "../../assets/images/banner/banner_1.jpg";
import Banner2 from "../../assets/images/banner/banner_2.jpg";
import Banner3 from "../../assets/images/banner/banner_3.jpg";

export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <div className='container banner-wrapper'>
          <div className='banner-item'>
            <img className='banner-img' src={Banner1} alt='Banner 1' />
          </div>
          <div className='banner-item'>
            <img className='banner-img' src={Banner2} alt='Banner 2' />
          </div>
          <div className='banner-item'>
            <img className='banner-img' src={Banner3} alt='Banner 3' />
          </div>
        </div>
      </div>
    );
  }
}

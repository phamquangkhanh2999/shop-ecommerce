import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.style.scss";

class CarouselHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { settings, sliderBanner } = this.props;

    return (
      <div className='slider'>
        <div className='container slider-container'>
          <Slider {...settings}>
            {sliderBanner &&
              sliderBanner.length > 0 &&
              sliderBanner.map((item, index) => (
                <div key={index}>
                  <img src={item.image} alt={item.desc} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default CarouselHome;

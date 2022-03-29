import React, { Component } from "react";
import Header from "../../components/header/Header";
import "./Home.style.scss";
import CarouselHome from "../../components/slider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../../components/banner/Banner";
import { sliderBannerTop, sliderBannerBottom } from "../../data/banner/banner";
import Product from "../../components/product/Product";

class Home extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
    };

    return (
      <div className='home'>
        <Header />
        <CarouselHome settings={settings} sliderBanner={sliderBannerTop} />
        <Banner />
        <CarouselHome settings={settings} sliderBanner={sliderBannerBottom} />
        <Product settings={settings} />
      </div>
    );
  }
}

export default Home;

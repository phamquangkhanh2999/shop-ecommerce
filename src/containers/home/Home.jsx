import React, { Component } from "react";
import "./Home.style.scss";
import CarouselHome from "../../components/slider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../../components/banner/Banner";
import { sliderBannerTop, sliderBannerBottom } from "../../data/banner/banner";
import BannerHome from "../../components/banner/BannerHome";
import ProductNew from "../../components/productNews/ProductNew";

class Home extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <div className='home'>
        <CarouselHome settings={settings} sliderBanner={sliderBannerTop} />
        <Banner />
        <CarouselHome settings={settings} sliderBanner={sliderBannerBottom} />
        <ProductNew />
        <BannerHome />
      </div>
    );
  }
}

export default Home;

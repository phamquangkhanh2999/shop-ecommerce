import React, { Component } from "react";
import "./Product.style.scss";
import numberWithCommas from "../../utils/numberWithCommas";
import Slider from "react-slick";
import Product1 from "../../assets/images/product/product_01.jpg";
import Product2 from "../../assets/images/product/product_02.jpg";
import Product3 from "../../assets/images/product/product_03.jpg";
import Product4 from "../../assets/images/product/product_04.jpg";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };
  // xy ly update khi render
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  // xy ly remove state width  khi componentDidMount xong
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
    };

    const { width } = this.state;
    return (
      <div className='product'>
        <div className='container'>
          <div className='product-title'>
            <h3>Hàng mới về </h3>
          </div>
          {width && width >= 600 ? (
            <div className='product-wrapper'>
              <div className='product-item'>
                <div className='product-item-img'>
                  <img src={Product1} alt='' />
                  <div className='product-item-buynow'>
                    <span> Mua Ngay</span>
                  </div>
                </div>
                <div className='product-item-details'>
                  <div className='product-item-name'>Áo sơ mi - BA220401NT</div>
                  <div className='product-item-price'>
                    {numberWithCommas(628000)}&nbsp;₫
                  </div>
                </div>
              </div>
              <div className='product-item'>
                <div className='product-item-img'>
                  <img src={Product2} alt='' />
                  <div className='product-item-buynow'>
                    <span> Mua Ngay</span>
                  </div>
                </div>
                <div className='product-item-details'>
                  <div className='product-item-name'>Áo sơ mi - BA220401NT</div>
                  <div className='product-item-price'>
                    {numberWithCommas(628000)}&nbsp;₫
                  </div>
                </div>
              </div>
              <div className='product-item'>
                <div className='product-item-img'>
                  <img src={Product3} alt='' />
                  <div className='product-item-buynow'>
                    <span> Mua Ngay</span>
                  </div>
                </div>
                <div className='product-item-details'>
                  <div className='product-item-name'>Áo sơ mi - BA220401NT</div>
                  <div className='product-item-price'>
                    {numberWithCommas(628000)}&nbsp;₫
                  </div>
                </div>
              </div>
              <div className='product-item'>
                <div className='product-item-img'>
                  <img src={Product4} alt='' />
                  <div className='product-item-buynow'>
                    <span> Mua Ngay</span>
                  </div>
                </div>
                <div className='product-item-details'>
                  <div className='product-item-name'>Áo sơ mi - BA220401NT</div>
                  <div className='product-item-price'>
                    {numberWithCommas(628000)}&nbsp;₫
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Slider {...settings}>
              <div className='product-item-slider'>
                <div className='product-item-slider-img'>
                  <img src={Product1} alt='' />
                  <div className='product-item-slider-buynow'>
                    <span> Mua Ngay</span>
                  </div>
                </div>
                <div className='product-item-slider-details'>
                  <div className='product-item-slider-name'>
                    Áo sơ mi - BA220401NT
                  </div>
                  <div className='product-item-slider-price'>
                    {numberWithCommas(628000)}&nbsp;₫
                  </div>
                </div>
              </div>
              <div className='product-item-slider'>
                <div className='product-item-slider-img'>
                  <img src={Product1} alt='' />
                  <div className='product-item-slider-buynow'>
                    <span> Mua Ngay</span>
                  </div>
                </div>
                <div className='product-item-slider-details'>
                  <div className='product-item-slider-name'>
                    Áo sơ mi - BA220401NT
                  </div>
                  <div className='product-item-slider-price'>
                    {numberWithCommas(628000)}&nbsp;₫
                  </div>
                </div>
              </div>
              <div className='product-item-slider'>
                <div className='product-item-slider-img'>
                  <img src={Product1} alt='' />
                  <div className='product-item-slider-buynow'>
                    <span> Mua Ngay</span>
                  </div>
                </div>
                <div className='product-item-slider-details'>
                  <div className='product-item-slider-name'>
                    Áo sơ mi - BA220401NT
                  </div>
                  <div className='product-item-slider-price'>
                    {numberWithCommas(628000)}&nbsp;₫
                  </div>
                </div>
              </div>
              <div className='product-item-slider'>
                <div className='product-item-slider-img'>
                  <img src={Product1} alt='' />
                  <div className='product-item-slider-buynow'>
                    <span> Mua Ngay</span>
                  </div>
                </div>
                <div className='product-item-slider-details'>
                  <div className='product-item-slider-name'>
                    Áo sơ mi - BA220401NT
                  </div>
                  <div className='product-item-slider-price'>
                    {numberWithCommas(628000)}&nbsp;₫
                  </div>
                </div>
              </div>
            </Slider>
          )}
        </div>
      </div>
    );
  }
}

export default Product;

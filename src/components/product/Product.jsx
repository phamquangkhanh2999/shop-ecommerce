import React, { Component } from "react";
import "./Product.style.scss";
import numberWithCommas from "../../utils/numberWithCommas";
import Slider from "react-slick";
import Grid from "../grid/Grid";
import ProductCard from "../productCard/ProductCard";
import productData from "../../data/products/products";

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
    const productNews = productData.getAllProductNews();

    const { width } = this.state;
    return (
      <div className='product'>
        <div className='container'>
          <div className='product-title'>
            <h3>Hàng mới về </h3>
          </div>
          {width && width >= 600 ? (
            <Grid col={4} md={4} gap={20}>
              {productNews &&
                productNews.length > 0 &&
                productNews.map((item, index) => (
                  <ProductCard
                    key={index}
                    image={item.image01}
                    title={item.title}
                    price={item.price}
                  />
                ))}
            </Grid>
          ) : (
            <Slider {...settings}>
              {productNews &&
                productNews.length > 0 &&
                productNews.map((item, index) => (
                  <div className='product-item-slider'>
                    <div className='product-item-slider-img'>
                      <img src={item.image01} alt='' />
                      <div className='product-item-slider-buynow'>
                        <span> Mua Ngay</span>
                      </div>
                    </div>
                    <div className='product-item-slider-details'>
                      <div className='product-item-slider-name'>
                        {item.title}
                      </div>
                      <div className='product-item-slider-price'>
                        {numberWithCommas(item.price)}&nbsp;₫
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          )}
        </div>
      </div>
    );
  }
}

export default Product;

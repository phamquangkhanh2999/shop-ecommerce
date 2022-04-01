import React, { Component } from "react";
import numberWithCommas from "../../utils/numberWithCommas";
import "./ProductCard.style.scss";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { image, title, price } = this.props;

    return (
      <div className='product-item'>
        <div className='product-item-img'>
          <img src={image} alt='' />
          <div className='product-item-buynow'>
            <span> Mua Ngay</span>
          </div>
        </div>
        <div className='product-item-details'>
          <div className='product-item-name'>{title}</div>
          <div className='product-item-price'>
            {numberWithCommas(price)}&nbsp;₫
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;

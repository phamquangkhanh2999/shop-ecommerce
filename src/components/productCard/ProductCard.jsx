import React, { Component } from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../../utils/numberWithCommas";
import "./ProductCard.style.scss";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { image01, title, price, slug } = this.props.product;

    return (
      <div className='product-item'>
        <Link to={`/ao/${slug}`}>
          <div className='product-item-img'>
            <img src={image01} alt='' />
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
        </Link>
      </div>
    );
  }
}

export default ProductCard;

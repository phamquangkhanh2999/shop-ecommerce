import React, { Component } from "react";
import "./DialogCart.style.scss";
import { dataCart } from "../../data/dataCart";
import numberWithCommas from "../../utils/numberWithCommas";
import { Link } from "react-router-dom";

class DialogCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isActiveDialog, isNavbar } = this.props;

    return (
      <div
        className={isActiveDialog ? "dialog-cart active-dialog" : "dialog-cart"}
      >
        <div
          className={isNavbar ? "block-cart block-cart-fixed" : "block-cart"}
        >
          <div className='cart-mobile-title'>
            <strong className='cart-mobile-text'>
              <span>Giỏ Hàng 0</span>
            </strong>
            <span
              className='cart-mobile-close'
              onClick={() =>
                this.setState({
                  isActiveDialog: false,
                })
              }
            >
              <i className='fa-solid fa-xmark'></i>&nbsp;&nbsp;Đóng
            </span>
          </div>
          {dataCart && dataCart.length > 0 ? (
            <div className='minicart-wrapper'>
              {dataCart.map((item, index) => (
                <div className='minicart-item' key={index}>
                  <div className='minicart-item-info'>
                    <div className='product-image-container'>
                      <img src={item.image01} alt='' />
                    </div>
                    <div className='minicart-item-details'>
                      <span className='minicart-item-name'>{item.title}</span>
                      <div className='minicart-item-options'>
                        <div className='minicart-item-option'>
                          <span>Màu Sắc:&nbsp;</span>
                          <span
                            className='minicart-color'
                            style={{ backgroundColor: `${item.colors}` }}
                          ></span>
                        </div>
                        <div className='minicart-item-option'>
                          <span className='minicart-size'>
                            Kích cỡ:&nbsp; {item.size}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='price-container'>
                    <span className='minicart-price'>
                      <strong> {numberWithCommas(item.price)}&nbsp;₫</strong>
                    </span>
                    <div className='minicart-item-qty'>
                      <span className='decreasing-qty'>
                        <i className='fa-solid fa-minus'></i>
                      </span>
                      <span className='item-qty'>1</span>
                      <span className='increase-qty'>
                        <i className='fa-solid fa-plus'></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div className='minicart-order'>
                <div className='minicart-quantity'>
                  <span>
                    <strong>Tổng số sản phẩm: </strong>
                  </span>
                  <span>
                    <strong>1</strong>
                  </span>
                </div>
                <div className='minicart-subtotal'>
                  <span>
                    <strong>Tạm tính: </strong>
                  </span>
                  <span>
                    <strong> {numberWithCommas(628000)}&nbsp;₫</strong>
                  </span>
                </div>
                <div className='minicart-actions'>
                  <div className='minicart-purchase'>Đặt hàng</div>
                  <Link to='/cart'>
                    <div className='minicart-viewcart'>Xem giỏ hàng</div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className='block-cart-wrapper'>
              <p className='block-cart-text'>
                Không có sản phẩm nào trong giỏ hàng của bạn
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DialogCart;

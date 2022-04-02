import React, { Component } from "react";
import "./DialogCart.style.scss";

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

          <div className='block-cart-wrapper'>
            <p className='block-cart-text'>
              Không có sản phẩm nào trong giỏ hàng của bạn
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogCart;

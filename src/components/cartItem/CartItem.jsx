import React, { Component } from "react";
import "./CartItem.scss";
import numberWithCommas from "../../utils/numberWithCommas";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class CartItem extends Component {
  constructor(props) {
    super(props);
  }

  updateQuantity = (qty) => {
    const { quantity } = this.props.cartItem;
    if (qty === "+") {
      console.log("cong");
      this.props.updateCart({ ...this.props.cartItem, quantity: quantity + 1 });
    }
    if (qty === "-") {
      this.props.updateCart({
        ...this.props.cartItem,
        quantity: quantity - 1 === 0 ? 1 : quantity - 1,
      });
    }
  };
  render() {
    const { cartItem } = this.props;
    return (
      <tr className='item-info'>
        <td className=' col col-item'>
          <div className='cart-item-info'>
            <div className='product-image-container'>
              <img src={cartItem.product.image01} alt='' />
            </div>
            <div className='cart-item-details'>
              <span className='cart-item-name'>{cartItem.product.title}</span>

              <div className='cart-item-options'>
                <div className='cart-item-option'>
                  <span>Màu Sắc:&nbsp;</span>
                  <span
                    className='cart-color'
                    style={{
                      backgroundColor: `${cartItem.color}`,
                    }}
                  ></span>
                </div>
                <div className='cart-item-option'>
                  <span className='cart-size'>
                    Kích cỡ:&nbsp; {cartItem.size}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td
          className='col col-action'
          onClick={() => this.props.removeCart(cartItem.id)}
        >
          Xóa
        </td>
        <td className='col col-qty'>
          <div className='col-mobile'>Số lượng</div>
          <div className='cart-item-qty'>
            <span
              className='cart-decreasing-qty'
              onClick={() => this.updateQuantity("-")}
            >
              <i className='fa-solid fa-minus'></i>
            </span>
            <span className='item-qty'>{cartItem.quantity}</span>
            <span
              className='cart-increase-qty'
              onClick={() => this.updateQuantity("+")}
            >
              <i className='fa-solid fa-plus'></i>
            </span>
          </div>
        </td>
        <td className='col col-price'>
          <div className='col-mobile'>Giá</div>
          <strong>{numberWithCommas(cartItem.price)}&nbsp;₫</strong>
        </td>
        <td className='col col-subtotal'>
          <div className='col-mobile'>Tổng tiền</div>
          <strong>
            {numberWithCommas(+cartItem.price * +cartItem.quantity)}
            &nbsp;₫
          </strong>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeCart: (id) => dispatch(actions.removeCart(id)),
  updateCart: (data) => dispatch(actions.updateCart(data)),
});
export default connect(null, mapDispatchToProps)(CartItem);

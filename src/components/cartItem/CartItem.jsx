import React, { Component } from "react";
import "./CartItem.scss";
import numberWithCommas from "../../utils/numberWithCommas";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class CartItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cartItem } = this.props;

    return (
      <div>
        <table className='shopping-cart-table'>
          <thead>
            <tr>
              <th className='col col-item'>Sản phẩm</th>
              <th className='col col-action'></th>
              <th className='col col-qty'>Số lượng</th>
              <th className='col col-price'>Giá </th>
              <th className='col col-subtotal'>Tổng tiền</th>
            </tr>
          </thead>
          <tbody className='cart-item'>
            {cartItem &&
              cartItem.map((item, index) => (
                <tr className='item-info' key={index}>
                  <td className=' col col-item'>
                    <div className='cart-item-info'>
                      <div className='product-image-container'>
                        <img src={item.product.image01} alt='' />
                      </div>
                      <div className='cart-item-details'>
                        <span className='cart-item-name'>
                          {item.product.title}
                        </span>

                        <div className='cart-item-options'>
                          <div className='cart-item-option'>
                            <span>Màu Sắc:&nbsp;</span>
                            <span
                              className='cart-color'
                              style={{
                                backgroundColor: `${item.color}`,
                              }}
                            ></span>
                          </div>
                          <div className='cart-item-option'>
                            <span className='cart-size'>
                              Kích cỡ:&nbsp; {item.size}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    className='col col-action'
                    onClick={() => this.props.removeCart(item.id)}
                  >
                    Xóa
                  </td>
                  <td className='col col-qty'>
                    <div className='col-mobile'>Số lượng</div>
                    <div className='cart-item-qty'>
                      <span className='cart-decreasing-qty'>
                        <i className='fa-solid fa-minus'></i>
                      </span>
                      <span className='item-qty'>{item.quantity}</span>
                      <span className='cart-increase-qty'>
                        <i className='fa-solid fa-plus'></i>
                      </span>
                    </div>
                  </td>
                  <td className='col col-price'>
                    <div className='col-mobile'>Giá</div>
                    <strong>{numberWithCommas(item.price)}&nbsp;₫</strong>
                  </td>
                  <td className='col col-subtotal'>
                    <div className='col-mobile'>Tổng tiền</div>
                    <strong>
                      {numberWithCommas(+item.price * +item.quantity)}&nbsp;₫
                    </strong>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  removeCart: (id) => dispatch(actions.removeCart(id)),
});
export default connect(null, mapDispatchToProps)(CartItem);

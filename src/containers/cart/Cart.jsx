import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cart.style.scss";
import { dataCart } from "../../data/dataCart";
import CartRight from "../../assets/images/cart/cart-banner-right.png";
import numberWithCommas from "../../utils/numberWithCommas";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='cart container'>
        <div className='cart-title'>
          <h4 className='cart-title-home'>
            <Link className='home-back' to='/'>
              Trang chủ
            </Link>
          </h4>
          <h4 className='cart-title-text'>Giỏ hàng</h4>
        </div>
        <div className='cart-content'>
          {dataCart && dataCart.length > 0 ? (
            <div className='cart-row'>
              <div className='cart-container'>
                {/* start table shop cart */}
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
                    {dataCart.map((item, index) => (
                      <tr className='item-info' key={index}>
                        <td className=' col col-item'>
                          <div className='cart-item-info'>
                            <div className='product-image-container'>
                              <img src={item.image01} alt='' />
                            </div>
                            <div className='cart-item-details'>
                              <span className='cart-item-name'>
                                {item.title}
                              </span>

                              <div className='cart-item-options'>
                                <div className='cart-item-option'>
                                  <span>Màu Sắc:&nbsp;</span>
                                  <span
                                    className='cart-color'
                                    style={{
                                      backgroundColor: `${item.colors}`,
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
                        <td className='col col-action'>Xóa</td>
                        <td className='col col-qty'>
                          <div className='col-mobile'>Số lượng</div>
                          <div className='cart-item-qty'>
                            <span className='cart-decreasing-qty'>
                              <i className='fa-solid fa-minus'></i>
                            </span>
                            <span className='item-qty'>1</span>
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
                          <strong>{numberWithCommas(item.price)}&nbsp;₫</strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* end table shop cart */}
                {/* summary */}
                <div className='shopping-cart-bottom'>
                  <div className='cart-left'>
                    <div className='cart-banner-bottom'>
                      <Link to='/catalog'>
                        <span>Tiếp tục mua hàng</span>
                      </Link>
                    </div>
                  </div>
                  <div className='cart-summary'>
                    <div className='cart-summary-count-content'>
                      <div className='cart-summary-total'>
                        <span>TỔNG SẢN PHẨM:</span>
                        <span>
                          <strong>2</strong>
                        </span>
                      </div>
                      <div className='cart-summary-price'>
                        <span>TẠM TÍNH</span>
                        <span> 648.000 ₫</span>
                      </div>
                    </div>
                    <div className='proceed-to-checkout'>
                      <span>Đặt hàng</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cart-right'>
                <img src={CartRight} alt='Banner right' />
              </div>
            </div>
          ) : (
            <div className='cart-empty'>
              <p className='cart-empty-image-wrap'>
                Không có sản phẩm nào trong giỏ hàng của bạn
              </p>
              <div className='continue-shopping-link'>
                <Link to='/catalog'>Tiếp tục mua sắm</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;

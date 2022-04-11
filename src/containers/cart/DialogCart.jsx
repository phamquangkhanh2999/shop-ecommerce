import React, { Component } from "react";
import "./DialogCart.style.scss";
import numberWithCommas from "../../utils/numberWithCommas";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import productData from "../../data/products/products";
import * as actions from "../../store/actions";

class DialogCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProduct: [],
      totalPrice: 0,
    };
  }
  getCartItemsInfo = (cartItems) => {
    let res = [];
    if (cartItems.length > 0) {
      cartItems.forEach((e) => {
        let product = productData.getProductBySlug(e.slug);
        res.push({
          ...e,
          product: product,
        });
      });
    }
    return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
  };
  componentDidMount() {
    const res = this.getCartItemsInfo(this.props.cartLists);
    const price = this.props.cartLists.reduce(
      (total, item) => total + Number(item.quantity) * Number(item.price),
      0
    );
    this.setState({
      cartProduct: res,
      totalPrice: price,
    });
  }
  componentDidUpdate(prevProps) {
    const res = this.getCartItemsInfo(this.props.cartLists);
    const price = this.props.cartLists.reduce(
      (total, item) => total + Number(item.quantity) * Number(item.price),
      0
    );
    if (prevProps.cartLists !== this.props.cartLists) {
      this.setState({
        cartProduct: res,
        totalPrice: price,
      });
    }
  }

  render() {
    const { isActiveDialog, isNavbar, changeActive, cartLists } = this.props;
    const { cartProduct, totalPrice } = this.state;

    return (
      <div
        className={isActiveDialog ? "dialog-cart active-dialog" : "dialog-cart"}
      >
        <div
          className={isNavbar ? "block-cart block-cart-fixed" : "block-cart"}
        >
          <div className='cart-mobile-title'>
            <strong className='cart-mobile-text'>
              <span>Giỏ Hàng {cartLists.length}</span>
            </strong>
            <span
              className='cart-mobile-close'
              onClick={() => changeActive(false)}
            >
              <i className='fa-solid fa-xmark'></i>&nbsp;&nbsp;Đóng
            </span>
          </div>
          {cartProduct && cartProduct.length > 0 ? (
            <div className='minicart-wrapper'>
              {cartProduct.map((item, index) => (
                <div className='minicart-item' key={index}>
                  <div className='minicart-item-info'>
                    <div className='product-image-container'>
                      <img src={item.product.image01} alt='' />
                      <span
                        className='delete-cart'
                        onClick={() => this.props.removeCart(item.id)}
                      >
                        &#88;
                      </span>
                    </div>
                    <div className='minicart-item-details'>
                      <span className='minicart-item-name'>
                        {item.product.title}
                      </span>
                      <div className='minicart-item-options'>
                        <div className='minicart-item-option'>
                          <span>Màu Sắc:&nbsp;</span>
                          <span
                            className='minicart-color'
                            style={{ backgroundColor: `${item.color}` }}
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
                      <span className='item-qty'>{item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className='minicart-order'>
                <div className='minicart-subtotal'>
                  <span>
                    <strong>Tạm tính: </strong>
                  </span>
                  <span>
                    <strong> {numberWithCommas(totalPrice)}&nbsp;₫</strong>
                  </span>
                </div>
                <div className='minicart-actions'>
                  <Link to='/checkout'>
                    <div className='minicart-purchase'>Đặt hàng</div>
                  </Link>

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

const mapStateToProps = (state) => ({
  cartLists: state.cartReducer.cartLists,
});
const mapDispatchToProps = (dispatch) => ({
  removeCart: (id) => dispatch(actions.removeCart(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DialogCart);

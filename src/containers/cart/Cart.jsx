import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cart.style.scss";
import productData from "../../data/products/products";
import CartRight from "../../assets/images/cart/cart-banner-right.png";
import numberWithCommas from "../../utils/numberWithCommas";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import CartItem from "../../components/cartItem/CartItem";
import { connect } from "react-redux";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProduct: [],
      totalPrice: 0,
      totalProduct: 0,
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
    const totalPrt = this.props.cartLists.reduce(
      (total, item) => total + Number(item.quantity),
      0
    );

    this.setState({
      cartProduct: res,
      totalPrice: price,
      totalProduct: totalPrt,
    });
  }
  componentDidUpdate(prevProps) {
    const res = this.getCartItemsInfo(this.props.cartLists);
    const price = this.props.cartLists.reduce(
      (total, item) => total + Number(item.quantity) * Number(item.price),
      0
    );
    const totalPrt = this.props.cartLists.reduce(
      (total, item) => total + Number(item.quantity),
      0
    );
    if (prevProps.cartLists !== this.props.cartLists) {
      this.setState({
        cartProduct: res,
        totalPrice: price,
        totalProduct: totalPrt,
      });
    }
  }
  render() {
    const { cartProduct, totalPrice, totalProduct } = this.state;
    return (
      <div className='cart container'>
        <Breadcrumbs pathLink={"Gi??? h??ng"} />
        <div className='cart-content'>
          {cartProduct && cartProduct.length > 0 ? (
            <div className='cart-row'>
              <div className='cart-container'>
                <table className='shopping-cart-table'>
                  <thead>
                    <tr>
                      <th className='col col-item'>Sa??n ph????m</th>
                      <th className='col col-action'></th>
                      <th className='col col-qty'>S??? l?????ng</th>
                      <th className='col col-price'>Gi?? </th>
                      <th className='col col-subtotal'>T???ng ti???n</th>
                    </tr>
                  </thead>
                  <tbody className='cart-item'>
                    {cartProduct &&
                      cartProduct.map((item, index) => (
                        <CartItem cartItem={item} key={index} />
                      ))}
                  </tbody>
                </table>
                {/* summary */}
                <div className='shopping-cart-bottom'>
                  <div className='cart-left'>
                    <div className='cart-banner-bottom'>
                      <Link to='/catalog'>
                        <span>Ti???p t???c mua h??ng</span>
                      </Link>
                    </div>
                  </div>
                  <div className='cart-summary'>
                    <div className='cart-summary-count-content'>
                      <div className='cart-summary-total'>
                        <span>T???NG S???N PH???M:</span>
                        <span>
                          <strong>{totalProduct}</strong>
                        </span>
                      </div>
                      <div className='cart-summary-price'>
                        <span className='cart-summary-price-title'>
                          T???M T??NH
                        </span>
                        <span>{numberWithCommas(totalPrice)}&nbsp;???</span>
                      </div>
                    </div>
                    <Link to='/checkout'>
                      <div className='proceed-to-checkout'>
                        <span>?????t h??ng</span>
                      </div>
                    </Link>
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
                Kh??ng c?? s???n ph???m n??o trong gi??? h??ng c???a b???n
              </p>
              <div className='continue-shopping-link'>
                <Link to='/catalog'>Ti???p t???c mua s???m</Link>
              </div>
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
export default connect(mapStateToProps, null)(Cart);

import React, { Component } from "react";
import "./Order.style.scss";
import Logo from "../../assets/images/logo.png";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import productData from "../../data/products/products";
import numberWithCommas from "../../utils/numberWithCommas";
import { withRouter } from "../../hooks/withRouter";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      phone: "",
      transport: +30000,
      discount: "",
      cartProduct: [],
      totalPrice: 0,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
  createOrder = (e) => {
    e.preventDefault();
    let today = new Date(),
      date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear(),
      Newdate =
        today.getDate() +
        6 +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
    let rndInt = Math.floor(Math.random() * 9999) + 1000;
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
      code_orders: rndInt,
      date_day: date,
      new_date: Newdate,
      transport: this.state.transport,
      discount: this.state.discount,
      totalPrice: this.state.totalPrice,
      cartItem: this.props.cartLists,
    };
    this.props.orderProduct(order);
    this.props.navigate("/order-complete");
  };
  render() {
    const { cartProduct, totalPrice } = this.state;
    return (
      <div className='order'>
        <div className='order-logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='order-content container'>
          <div className='order-left'>
            <div className='order-breadcrumb-left'>
              <Breadcrumbs pathLink={"Thanh to??n"} />
            </div>

            <form className='order-form' onSubmit={this.createOrder}>
              <ul className='form-container'>
                <li className='form-items'>
                  <h4 className='form-item-title'>?????a ch??? nh???n h??ng</h4>
                  <ul className='form-information'>
                    <li>
                      <label>?????a ch??? email</label>
                      <input
                        name='email'
                        type='email'
                        required
                        placeholder='example@gmail.com'
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>H??? v?? T??n</label>
                      <input
                        name='name'
                        type='text'
                        required
                        placeholder='H??? v?? T??n'
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>S??? ??i???n tho???i</label>
                      <input
                        name='phone'
                        type='text'
                        required
                        placeholder='S??? ??i???n tho???i'
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>??i??a chi?? </label>
                      <input
                        name='address'
                        type='text'
                        required
                        placeholder='??i??a chi??'
                        onChange={this.handleInput}
                      ></input>
                    </li>
                  </ul>
                </li>
                <li className='form-items'>
                  <h4 className='form-item-title'>V???n chuy???n</h4>
                  <p>
                    L??u ??: T???i m???t s??? khu v???c, th???i gian giao h??ng th???c t??? c??
                    th??? s??? ch???m h??n d??? ki???n, chi ti???t
                  </p>
                  <input
                    id='transport'
                    type='radio'
                    name='transport'
                    value={this.state.transport}
                    defaultChecked
                  />
                  <label htmlFor='transport' className='price'>
                    <span>Ph?? v???n chuy???n </span>
                    <span>30.000&nbsp;???</span>
                  </label>
                </li>
                <li className='form-items'>
                  <h4 className='form-item-title'>Ph????ng th???c thanh to??n</h4>
                  <input id='payment-method' type='radio' defaultChecked />
                  <label htmlFor='payment-method '>
                    Thanh to??n khi nh???n h??ng
                  </label>
                </li>
                <li className='form-items'>
                  <h4 className='form-item-title'>??p d???ng m?? gi???m gi??</h4>
                  <input
                    type='text'
                    name='discount'
                    placeholder='M?? gi???m gi?? DC1, DC2'
                    onChange={this.handleInput}
                  />
                </li>
                <li className='form-items form-submit'>
                  <button className='button' type='submit'>
                    ?????t h??ng
                  </button>
                </li>
              </ul>
            </form>
          </div>
          <div className='order-right'>
            <div className='order-breadcrumb-right'>
              <Breadcrumbs pathLink={"Thanh to??n"} />
            </div>
            {cartProduct && cartProduct.length && (
              <div className='order-right-wrapper'>
                <ul className='order-product'>
                  <li className='col-wrapper'>
                    <div className='col col-detail'>
                      <span>S???n ph???m</span>
                    </div>
                    <div className='col col-qty'>
                      <span>S??? l?????ng</span>
                    </div>
                    <div className='col col-price'>
                      <span>Gi?? ti???n</span>
                    </div>
                    <div className='col col-totalprice'>
                      <span>T???ng ti???n</span>
                    </div>
                  </li>
                  {cartProduct.map((item, index) => (
                    <li className='order-right-item' key={index}>
                      <div className='order-right-item-info col-detail'>
                        <div className='product-image-container'>
                          <img src={item.product.image01} alt='' />
                        </div>
                        <div className='order-right-item-details'>
                          <span className='order-right-item-name'>
                            {item.product.title}
                          </span>
                          <div className='order-right-item-options'>
                            <div className='order-right-item-option'>
                              <span>M??u S???c:&nbsp;</span>
                              <span
                                className='order-right-color'
                                style={{ backgroundColor: `${item.color}` }}
                              ></span>
                            </div>
                            <div className='order-right-item-option'>
                              <span className='order-right-size'>
                                K??ch c???:&nbsp; {item.size}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='order-right-item-qty  col-qty'>
                        <span className='item-qty'>{item.quantity}</span>
                      </div>
                      <div className='order-right-price col-price'>
                        <strong>{numberWithCommas(item.price)}&nbsp;???</strong>
                      </div>
                      <div className='order-right-price col-totalprice'>
                        <strong>
                          {numberWithCommas(+item.price * +item.quantity)}
                          &nbsp;???
                        </strong>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className='order-right-order'>
                  <div className='order-right-subtotal'>
                    <span>
                      <strong>T???ng ti???n: </strong>
                    </span>
                    <span>
                      <strong> {numberWithCommas(totalPrice)}&nbsp;???</strong>
                    </span>
                  </div>
                  <div className='order-right-subtotal'>
                    <span>
                      <strong>V???n chuy???n: </strong>
                    </span>
                    <span>
                      <strong> {numberWithCommas(30000)}&nbsp;???</strong>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartLists: state.cartReducer.cartLists,
});
const mapDispatchToProps = (dispatch) => ({
  orderProduct: (data) => dispatch(actions.orderProduct(data)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order));

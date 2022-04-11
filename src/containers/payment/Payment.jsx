import React, { Component } from "react";
import "./Payment.style.scss";
import { connect } from "react-redux";
import Loading from "../../components/loading/Loading";
import numberWithCommas from "../../utils/numberWithCommas";
import { withRouter } from "../../hooks/withRouter";
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dct: 0,
    };
  }
  componentDidMount() {
    const { discount } = this.props.orderProducts[0];
    if (discount && discount === "DC1") {
      this.setState({
        dct: +30000,
      });
    }
    if (discount && discount === "DC2") {
      this.setState({
        dct: +40000,
      });
    }
  }
  render() {
    const { orderProducts } = this.props;
    const { dct } = this.state;

    return (
      <React.Fragment>
        {orderProducts && orderProducts.length > 0 ? (
          <div className='payment'>
            <div className='payment-wrapper'>
              <div className='payment-tittle'>
                <h2>ĐẶT HÀNG THÀNH CÔNG!</h2>
                <h4>Cảm ơn quý khách đã lựa chọn E-SHOP</h4>
                <div className='order-result'>
                  <div className='order-number'>
                    <p>Mã đơn hàng</p>
                    <p>{orderProducts[0].code_orders}</p>
                  </div>
                  <div className='order-date'>
                    <p>Ngày nhận đơn</p>
                    <p className='text-bold'>{orderProducts[0].date_day}</p>
                  </div>
                </div>
              </div>
              <div className='payment-content'>
                <h3>CHI TIẾT ĐƠN HÀNG</h3>
                <div className='order-lists'>
                  <div className='order-header order-row'>
                    <div className='col-left'>SẢN PHẨM</div>
                    <div className='col-right'>THÀNH TIỀN</div>
                  </div>
                  {orderProducts[0].cartItem &&
                    orderProducts[0].cartItem.map((item, index) => (
                      <div className='order-item order-row' key={index}>
                        <div className='col-left'>
                          {item.title}&nbsp;x&nbsp;
                          <span className='order-item__quantity'>
                            &nbsp;{item.quantity}
                          </span>
                        </div>
                        <div className='col-right order-item__temp-amount '>
                          {numberWithCommas(+item.quantity * +item.price)}
                          &nbsp;₫
                        </div>
                      </div>
                    ))}

                  <div className='order-price order-row'>
                    <div className='col-left'>Tạm tính</div>
                    <div className='col-right'>
                      {numberWithCommas(+orderProducts[0].totalPrice)}&nbsp;₫
                    </div>
                  </div>
                  <div className='order-discount order-row'>
                    <div className='col-left'>Giảm giá</div>
                    <div className='col-right'>
                      -&nbsp;
                      <span className='discount-amount'>
                        {numberWithCommas(dct)}&nbsp;₫
                      </span>
                    </div>
                  </div>
                  <div className='order-ship-fee order-row'>
                    <div className='col-left'>Phí giao hàng</div>
                    <div className='col-right'>
                      {numberWithCommas(+orderProducts[0].transport)}&nbsp;₫
                    </div>
                  </div>
                  <div className='order-payment order-row'>
                    <div className='col-left'>Phương thức thanh&nbsp;toán</div>
                    <div className='col-right'>COD</div>
                  </div>
                  <div className='order-expect order-row'>
                    <div className='col-left'>Giao hàng dự&nbsp;kiến</div>
                    <div className='col-right'>{orderProducts[0].new_date}</div>
                  </div>
                  <div className='order-subtotal order-row'>
                    <div className='col-left'>TỔNG CỘNG</div>
                    <div className='col-right'>
                      {numberWithCommas(
                        +orderProducts[0].totalPrice +
                          +orderProducts[0].transport -
                          +dct
                      )}
                      &nbsp;₫
                    </div>
                  </div>
                </div>
                <p className='support-info'>
                  Tổng đài hỗ trợ: <span className='text-info'>0123456789</span>
                </p>
                <button
                  className='section__btn'
                  type='submit'
                  onClick={() => this.props.navigate("/")}
                >
                  QUAY VỀ TRANG CHỦ
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  orderProducts: state.orderReducer.orderProducts,
});

export default withRouter(connect(mapStateToProps, null)(Payment));

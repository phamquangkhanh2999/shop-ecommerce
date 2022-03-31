import React, { Component } from "react";
import "./Footer.style.scss";
import LogoFooter from "../../assets/images/logo.png";
import Pay from "../../assets/images/footer/pay-footer.png";

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='container footer-content'>
          <div className='footer-column'>
            <div className='footer-item'>
              <div className='footer-logo'>
                <img src={LogoFooter} alt='Logo Footer' />
              </div>
              <ul className='footer-link'>
                <li className='ft-hotline'>
                  <span>
                    CÔNG TY CỔ PHẦN THỜI TRANG VIỆT NAM <br />
                    Hotline: 1900 0000
                    <br />
                    8:30 - 19:00 tất cả các ngày trong tuần.
                  </span>
                </li>
                <li>
                  <b>VP Phía Bắc:</b>Phạm Văn đồng, Bắc từ Liêm,Hà nội
                </li>
                <li>
                  <b>VP Phía Bắc:</b>Phạm Văn đồng, Bắc từ Liêm,Hà nội
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-column'>
            <div className='footer-item'>
              <h5 className='footer-title'>
                <strong>HỖ TRỢ KHÁCH HÀNG</strong>
              </h5>
              <ul className='footer-link'>
                <li>Hỏi đáp</li>
                <li>Chính sách vận chuyển</li>
                <li>Hướng dẫn chọn kích cỡ</li>
                <li>Hướng dẫn thanh toán</li>
                <li>Quy định đổi hàng</li>
                <li>Hướng dẫn mua hàng</li>
              </ul>
            </div>
          </div>

          <div className='footer-column'>
            <div className='footer-item'>
              <h5 className='footer-title'>
                <strong>GIỚI THIỆU OWEN</strong>
              </h5>
              <ul className='footer-link'>
                <li>Giới thiệu</li>
                <li>Blog</li>
                <li>Hệ thống cửa hàng</li>
                <li>Liên hệ với E-Shop</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </div>
          </div>
          <div className='footer-column'>
            <div className='footer-item'>
              <h5 className='footer-title'>
                <strong>KẾT NỐI</strong>
              </h5>
              <ul className='footer-social'>
                <li>
                  <i className='fa-brands fa-facebook'></i>
                </li>
                <li>
                  <i className='fa-brands fa-twitter-square'></i>
                </li>
                <li>
                  <i className='fa-brands fa-instagram-square'></i>
                </li>
                <li>
                  <i className='fa-brands fa-youtube'></i>
                </li>
              </ul>
              <h5 className='footer-title'>
                <strong>PHƯƠNG THỨC THANH TOÁN</strong>
              </h5>
              <div className='pay'>
                <img src={Pay} alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <p className='footer-copyright container'>
            <span style={{ color: " #000" }}>© 2022 Phạm Quang Khánh-</span>
            quangkhanh2999@gmail.com
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import "./BannerHome.style.scss";
import HomeBanner from "../../assets/images/banner/Banner_bottom.jpg";
import HomeSubcribe from "../../assets/images/banner/home-subcribe.jpg";

export default class BannerHome extends Component {
  render() {
    return (
      <div className='banner-home'>
        <div className='container banner-home-top'>
          <img src={HomeBanner} alt='home banner' />
        </div>
        <div className='container banner-home-bottom'>
          <div className='home-subcribe-left'>
            <img src={HomeSubcribe} alt='home subcribe' />
          </div>

          <div className='home-subcribe-right'>
            <div className='home-subcribe-wrapper'>
              <div className='home-subcribe-title'>
                <strong>ĐĂNG KÝ NHẬN BẢN TIN</strong>
              </div>
              <div className='home-subcribe-text'>
                <span>
                  Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn
                </span>
              </div>
              <div className='home-subcribe-form'>
                <input type='email' placeholder='Nhập email của bạn ' />
                <button>Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Menu from "../../components/menu/Menu";
import "./Header.style.scss";

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-top'>
          <div className='container header-top-hotline'>
            <p className='header-phone'>
              <i className='fa-solid fa-phone'></i>
              Hỗ trợ khách hàng:
              <strong>123456878</strong>
            </p>
          </div>
        </div>
        <div className='header-content'>
          <Menu />
        </div>
        <div className='header-promotion'>
          <div className='container'>
            <h4 className='promotion-title'>
              NẮNG LÊN PHỐ, CHÀNG LÊN ĐỒ. <u>Mua Ngay</u>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

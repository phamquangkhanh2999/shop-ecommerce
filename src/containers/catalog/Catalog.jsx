import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Catalog.style.scss";
import { sideBar } from "../../data/sidebar/sidebar";
import SidebarCatalog from "../../components/sidebar/SidebarCatalog";
import image_ao_1 from "../../assets/images/catalog/ao_1.jpg";
import numberWithCommas from "../../utils/numberWithCommas";

class Catalog extends Component {
  render() {
    console.log("🚀 ~ file: Catalog.jsx ~ line 5 ~ sideBar", sideBar[1].lists);
    return (
      <div className='catalog container'>
        {/* start catalog-title */}
        <div className='catalog-title'>
          <h4 className='catalog-title-home'>
            <Link className='home-back' to='/'>
              Trang chủ
            </Link>
          </h4>
          <h4 className='catalog-title-text'>Áo</h4>
        </div>

        {/* end catalog-title */}
        <div className='catalog-wrapper'>
          <div className='catalog-content'>
            <SidebarCatalog />
            <div className='sidebar-main'>
              <div className='block-filter'>
                <span className='filter-title'>
                  Bộ lọc
                  <i className='fa-solid fa-sliders'></i>
                </span>
              </div>
              <div className='product-wrapper'>
                <div className='product-item'>
                  <div className='product-item-img'>
                    <img src={image_ao_1} alt='' />
                    <div className='product-item-buynow'>
                      <span> Mua Ngay</span>
                    </div>
                  </div>
                  <div className='product-item-details'>
                    <div className='product-item-name'>
                      Áo sơ mi - BA220401NT
                    </div>
                    <div className='product-item-price'>
                      {numberWithCommas(628000)}&nbsp;₫
                    </div>
                  </div>
                </div>
                <div className='product-item'>
                  <div className='product-item-img'>
                    <img src={image_ao_1} alt='' />
                    <div className='product-item-buynow'>
                      <span> Mua Ngay</span>
                    </div>
                  </div>
                  <div className='product-item-details'>
                    <div className='product-item-name'>
                      Áo sơ mi - BA220401NT
                    </div>
                    <div className='product-item-price'>
                      {numberWithCommas(628000)}&nbsp;₫
                    </div>
                  </div>
                </div>
                <div className='product-item'>
                  <div className='product-item-img'>
                    <img src={image_ao_1} alt='' />
                    <div className='product-item-buynow'>
                      <span> Mua Ngay</span>
                    </div>
                  </div>
                  <div className='product-item-details'>
                    <div className='product-item-name'>
                      Áo sơ mi - BA220401NT
                    </div>
                    <div className='product-item-price'>
                      {numberWithCommas(628000)}&nbsp;₫
                    </div>
                  </div>
                </div>
                <div className='product-item'>
                  <div className='product-item-img'>
                    <img src={image_ao_1} alt='' />
                    <div className='product-item-buynow'>
                      <span> Mua Ngay</span>
                    </div>
                  </div>
                  <div className='product-item-details'>
                    <div className='product-item-name'>
                      Áo sơ mi - BA220401NT
                    </div>
                    <div className='product-item-price'>
                      {numberWithCommas(628000)}&nbsp;₫
                    </div>
                  </div>
                </div>
                <div className='product-item'>
                  <div className='product-item-img'>
                    <img src={image_ao_1} alt='' />
                    <div className='product-item-buynow'>
                      <span> Mua Ngay</span>
                    </div>
                  </div>
                  <div className='product-item-details'>
                    <div className='product-item-name'>
                      Áo sơ mi - BA220401NT
                    </div>
                    <div className='product-item-price'>
                      {numberWithCommas(628000)}&nbsp;₫
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;

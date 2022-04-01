import React, { Component } from "react";
import CheckBox from "../checkBox/CheckBox";
import "./CatalogFilter.style.scss";

class CatalogFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveFilter: false,
    };
  }
  render() {
    const { isActiveFilter } = this.state;
    console.log(
      "🚀 ~ file: CatalogFilter.jsx ~ line 14 ~ CatalogFilter ~ render ~ isActiveFilter",
      isActiveFilter
    );
    return (
      <div className='block-filter'>
        <span
          className='filter-title'
          onClick={() =>
            this.setState({
              isActiveFilter: !this.state.isActiveFilter,
            })
          }
        >
          Bộ lọc
          <i className='fa-solid fa-sliders'></i>
        </span>
        <div
          className={isActiveFilter ? "overlay active-overlay" : "menu-overlay"}
          onClick={() => this.setState({ isActiveFilter: false })}
        ></div>
        <div
          className={
            isActiveFilter ? "filter-wrapper activeFilter" : "filter-wrapper "
          }
        >
          <span
            className='catalog-filter-close'
            onClick={() =>
              this.setState({
                isActiveFilter: false,
              })
            }
          >
            <i className='fa-solid fa-xmark'></i>
          </span>
          <div className='catalog-filter-list'>
            <div className='catalog-filter-item'>
              <h4 className='catalog-filter-item-title'>Danh Mục sản Phẩm</h4>
              <CheckBox label='quang khanh' />
              <CheckBox label='quang khanh 1' />
            </div>
            <div className='catalog-filter-item'>
              <h4 className='catalog-filter-item-title'>Màu sắc</h4>
              <CheckBox label='quang khanh' />
              <CheckBox label='quang khanh 1' />
            </div>
            <div className='catalog-filter-item'>
              <h4 className='catalog-filter-item-title'>Kích cỡ</h4>
              <CheckBox label='quang khanh' />
              <CheckBox label='quang khanh 1' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CatalogFilter;

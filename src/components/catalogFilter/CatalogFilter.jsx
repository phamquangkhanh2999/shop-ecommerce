import React, { Component } from "react";
import CheckBox from "../checkBox/CheckBox";
import "./CatalogFilter.style.scss";
import { size, colors } from "../../data/products/productCodes";
import productData from "../../data/products/products";

const initFilter = {
  category: [],
  color: [],
  size: [],
};
const productList = productData.getAllProducts();
class CatalogFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveFilter: false,
      filter: initFilter,
      products: productList,
    };
  }

  filterSelect = (type, checked, item) => {
    let { filter } = this.state;
    if (checked) {
      switch (type) {
        case "COLOR":
          let colorItem = { ...filter, color: [...filter.color, item.color] };
          this.setState({
            filter: colorItem,
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          this.setState({
            filter: { ...filter.color, color: newColor },
          });
          break;
        default:
      }
    }
  };
  updateProducts = () => {
    let temp = productList;

    let { filter } = this.state;

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));

        return check !== undefined;
      });
    }

    // if (filter.size.length > 0) {
    //   temp = temp.filter((e) => {
    //     const check = e.size.find((size) => filter.size.includes(size));
    //     return check !== undefined;
    //   });
    // }

    this.setState({
      products: temp,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      this.updateProducts();
    }
  }

  render() {
    const { isActiveFilter, products } = this.state;

    return (
      <div className='block-filter'>
        <span
          className={
            isActiveFilter ? "filter-title activeFilter" : "filter-title"
          }
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
              <h4 className='catalog-filter-item-title'>Màu sắc</h4>
              {colors &&
                colors.map((item, index) => (
                  <CheckBox
                    label={item.display}
                    key={index}
                    onChange={(input) =>
                      this.filterSelect("COLOR", input.checked, item)
                    }
                  />
                ))}
            </div>
            <div className='catalog-filter-item'>
              <h4 className='catalog-filter-item-title'>Kích cỡ</h4>
              {size &&
                size.map((item, index) => (
                  <CheckBox label={item.display} key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CatalogFilter;

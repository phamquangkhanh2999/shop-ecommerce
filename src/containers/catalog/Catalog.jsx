import React, { Component } from "react";
import "./Catalog.style.scss";
import SidebarCatalog from "../../components/sidebar/SidebarCatalog";
import ProductCard from "../../components/productCard/ProductCard";
import Grid from "../../components/grid/Grid";
import CatalogFilter from "../../components/catalogFilter/CatalogFilter";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { connect } from "react-redux";
import { size, colors } from "../../data/products/productCodes";
import productData from "../../data/products/products";
import Loading from "../../components/loading/Loading";
import CheckBox from "../../components/checkBox/CheckBox";

const initFilter = {
  category: [],
  color: [],
  size: [],
};
const productList = productData.getAllProducts();

class Catalog extends Component {
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
          let colorItem = {
            ...filter,
            color: [...filter.color, item.color],
          };
          this.setState({
            filter: colorItem,
          });
          break;
        case "SIZE":
          let sizeItem = { ...filter, size: [...filter.size, item.size] };
          this.setState({
            filter: sizeItem,
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);

          this.setState({
            filter: { ...filter, color: newColor },
          });
          break;
        case "SIZE":
          const newSIZE = filter.color.filter((e) => e !== item.color);
          this.setState({
            filter: { ...filter, size: newSIZE },
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

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }

    this.setState({
      products: temp,
    });
  };
  componentDidMount() {
    this.updateProducts();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      this.updateProducts();
    }
  }

  render() {
    const { isActiveFilter, products, filter } = this.state;
    console.log(
      "🚀 ~ file: Catalog.jsx ~ line 104 ~ Catalog ~ render ~ filter",
      filter
    );

    return (
      <div className='catalog container'>
        {!products ? (
          <Loading />
        ) : (
          <>
            {/* start catalog-title */}
            <Breadcrumbs pathLink='Áo' />
            {/* end catalog-title */}
            <div className='catalog-wrapper'>
              <div className='catalog-content'>
                <SidebarCatalog />
                <div className='sidebar-main'>
                  <div className='block-filter'>
                    <span
                      className={
                        isActiveFilter
                          ? "filter-title activeFilter"
                          : "filter-title"
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
                      className={
                        isActiveFilter
                          ? "overlay active-overlay"
                          : "menu-overlay"
                      }
                      onClick={() => this.setState({ isActiveFilter: false })}
                    ></div>
                    <div
                      className={
                        isActiveFilter
                          ? "filter-wrapper activeFilter"
                          : "filter-wrapper "
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
                                  this.filterSelect(
                                    "COLOR",
                                    input.checked,
                                    item
                                  )
                                }
                              />
                            ))}
                        </div>
                        <div className='catalog-filter-item'>
                          <h4 className='catalog-filter-item-title'>Kích cỡ</h4>
                          {size &&
                            size.map((item, index) => (
                              <CheckBox
                                label={item.display}
                                key={index}
                                onChange={(input) =>
                                  this.filterSelect("SIZE", input.checked, item)
                                }
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Grid col={4} mdCol={3} smCol={2} gap={20}>
                    {products &&
                      products.length > 0 &&
                      products.map((item, index) => (
                        <ProductCard key={index} product={item} />
                      ))}
                  </Grid>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // productLists: state.productReducer.productLists,
});
const mapDispatchToProps = (dispatch) => ({
  // getAllProduct: () => dispatch(actions.getAllProduct()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

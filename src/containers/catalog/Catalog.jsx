import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Catalog.style.scss";
import SidebarCatalog from "../../components/sidebar/SidebarCatalog";
import ProductCard from "../../components/productCard/ProductCard";
import productData from "../../data/products/products";
import Grid from "../../components/grid/Grid";

class Catalog extends Component {
  render() {
    const products = productData.getAllProducts();

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
              <Grid col={4} mdCol={3} smCol={2} gap={20}>
                {products &&
                  products.length > 0 &&
                  products.map((item, index) => (
                    <ProductCard
                      key={index}
                      image={item.image01}
                      title={item.title}
                      price={item.price}
                    />
                  ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;

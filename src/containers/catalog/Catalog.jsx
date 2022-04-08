import React, { Component } from "react";
import "./Catalog.style.scss";
import SidebarCatalog from "../../components/sidebar/SidebarCatalog";
import ProductCard from "../../components/productCard/ProductCard";
import productData from "../../data/products/products";
import Grid from "../../components/grid/Grid";
import CatalogFilter from "../../components/catalogFilter/CatalogFilter";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

class Catalog extends Component {
  render() {
    const products = productData.getAllProducts();

    return (
      <div className='catalog container'>
        {/* start catalog-title */}
        <Breadcrumbs pathLink='Áo' />
        {/* end catalog-title */}
        <div className='catalog-wrapper'>
          <div className='catalog-content'>
            <SidebarCatalog />
            <div className='sidebar-main'>
              <CatalogFilter />
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
      </div>
    );
  }
}

export default Catalog;

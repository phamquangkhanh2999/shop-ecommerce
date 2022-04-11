import React, { Component } from "react";
import "./Catalog.style.scss";
import SidebarCatalog from "../../components/sidebar/SidebarCatalog";
import ProductCard from "../../components/productCard/ProductCard";
import Grid from "../../components/grid/Grid";
import CatalogFilter from "../../components/catalogFilter/CatalogFilter";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class Catalog extends Component {
  componentDidMount() {
    this.props.getAllProduct();
  }
  render() {
    const { productLists } = this.props;
    return (
      <div className='catalog container'>
        {!productLists ? (
          <div>Loading...</div>
        ) : (
          <>
            {/* start catalog-title */}
            <Breadcrumbs pathLink='Áo' />
            {/* end catalog-title */}
            <div className='catalog-wrapper'>
              <div className='catalog-content'>
                <SidebarCatalog />
                <div className='sidebar-main'>
                  <CatalogFilter />
                  <Grid col={4} mdCol={3} smCol={2} gap={20}>
                    {productLists &&
                      productLists.length > 0 &&
                      productLists.map((item, index) => (
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
  productLists: state.productReducer.productLists,
});
const mapDispatchToProps = (dispatch) => ({
  getAllProduct: () => dispatch(actions.getAllProduct()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

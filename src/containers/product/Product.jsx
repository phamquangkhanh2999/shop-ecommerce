import React, { Component } from "react";
import "./Product.style.scss";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { withRouter } from "../../hooks/withRouter";
import productData from "../../data/products/products";
import ProductView from "../../components/productView/ProductView";
import Grid from "../../components/grid/Grid";
import ProductCard from "../../components/productCard/ProductCard";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }
  componentDidMount() {
    this.props.getAllProduct();
  }
  // getProduct = () => {
  //   let { slug } = this.props.match.params;
  //   if (slug) {
  //     const res = productData.getAllProducts();
  //     const data = res.filter((item) => {
  //       return item.slug === slug;
  //     });
  //     this.setState({
  //       product: data,
  //     });
  //   }
  // };

  // componentDidMount() {
  //   this.getProduct();
  // }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  getProducts = (count) => {
    const { productLists } = this.props;
    let max = productLists.length - count;
    let min = 0;
    let start = Math.floor(Math.random() * (max - min) + min);
    return productLists.slice(start, start + count);
  };

  render() {
    const { product } = this.state;
    const randomProduct = this.getProducts(4);

    const products = productData.getProductBySlug(this.props.match.params.slug);
    const { productLists } = this.props;

    return (
      <div className='product container'>
        {!productLists ? (
          <div>Loading...</div>
        ) : (
          <>
            <Breadcrumbs pathLink={product.title} />
            <ProductView product={products} />
            <div className='related-product'>
              <h2>CÓ THỂ MUA CÙNG </h2>
              <Grid col={4} mdCol={4} smCol={4} gap={20}>
                {randomProduct &&
                  randomProduct.length > 0 &&
                  randomProduct.map((item, index) => (
                    <ProductCard key={index} product={item} />
                  ))}
              </Grid>
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
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(product)
);

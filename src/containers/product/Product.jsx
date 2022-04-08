import React, { Component } from "react";
import "./Product.style.scss";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { withRouter } from "../../hooks/withRouter";
import productData from "../../data/products/products";
import ProductView from "../../components/productView/ProductView";
import Grid from "../../components/grid/Grid";
import ProductCard from "../../components/productCard/ProductCard";

class product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
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

  render() {
    const { product } = this.state;
    const randomProduct = productData.getProducts(4);
    const products = productData.getProductBySlug(this.props.match.params.slug);
    console.log(product[0]);
    return (
      <div className='product container'>
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
      </div>
    );
  }
}

export default withRouter(product);

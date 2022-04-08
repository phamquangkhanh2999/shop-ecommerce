import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import numberWithCommas from "../../utils/numberWithCommas";
import "./ProductView.style.scss";

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      previewImage: null,
      isSizeIndex: "",
      isColorIndex: "",
      color: null,
      size: null,
    };
  }
  openPreviewImage = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const { isOpen, isSizeIndex, isColorIndex, previewImage } = this.state;
    const { product } = this.props;
    return (
      <div className='productView'>
        <div className='product-wrapper'>
          <div className='product-left'>
            <div className='product-image'>
              <img
                src={product.image01}
                alt={product.title}
                onClick={() => this.openPreviewImage()}
              />
            </div>
            <div className='product-image-wrapper'>
              <div className='product-image-item'>
                <img src={product.image01} alt={product.title} />
              </div>
              <div className='product-image-item'>
                <img src={product.image01} alt={product.title} />
              </div>
            </div>
          </div>
          <div className='product-right'>
            <div className='product-info-main'>
              <div className='product-info-section'>
                <div className='page-title-wrapper'>
                  <h4 className='page-title'>{product.title}</h4>
                  <div className='product-heart-links'>
                    <i className='fa-regular fa-heart'></i>
                  </div>
                </div>
                <div className='product-info-price'>
                  <span>
                    <strong>
                      {product.price && numberWithCommas(product.price)}&nbsp;₫
                    </strong>
                  </span>
                </div>
                <div className='product-info-color'>
                  <strong>Màu sắc: </strong> <br />
                  {product.colors &&
                    product.colors.map((item, index) => (
                      <span
                        className={
                          index === isColorIndex
                            ? "product-color isColorActive"
                            : "product-color"
                        }
                        key={index}
                        onClick={() =>
                          this.setState({
                            isColorIndex: +index,
                            color: item,
                          })
                        }
                        style={{
                          backgroundColor: `${item}`,
                        }}
                      ></span>
                    ))}
                </div>
                <div className='product-info-size'>
                  <strong>Kích cỡ:</strong> <br />
                  {product.size &&
                    product.size.map((item, index) => (
                      <span
                        className={
                          index === isSizeIndex
                            ? "product-size sizeActive"
                            : "product-size"
                        }
                        key={index}
                        onClick={() =>
                          this.setState({
                            isSizeIndex: +index,
                            size: item,
                          })
                        }
                      >
                        {item}
                      </span>
                    ))}
                </div>
                <div className='catalog-text-freeship'>
                  <div className='catalog-text-freeship-item'>
                    <strong>
                      <i className='fa-solid fa-truck'></i> FREESHIP TOÀN QUỐC
                    </strong>
                    <p>Cho đơn hàng trên 899k</p>
                  </div>
                  <div className='catalog-text-freeship-item'>
                    <strong>
                      <i className='fa-solid fa-circle-dollar-to-slot'></i>TẶNG
                      VOUCHER 10%
                    </strong>
                    <p>Cho khách hàng mới</p>
                  </div>
                </div>

                <div className='product-box-tocart'>
                  <span>Thêm vào giỏ hàng</span>
                </div>
              </div>
            </div>

            <div className='product-desc'>
              <h3>Mô tả chi tiết</h3>
              <div
                className='product-desc-content'
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
            </div>
          </div>
        </div>

        {product.image01 && isOpen === true && (
          <Lightbox
            mainSrc={product.image01}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

export default ProductView;
import React, { Component } from "react";
import "./Menu.style.scss";
import logo from "../../assets/images/logo.png";
import nav from "../../data/nav";
import Dropdown from "./Dropdown";
import { Link, NavLink } from "react-router-dom";
import DialogCart from "../../containers/cart/DialogCart";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false,
      isActiveMobile: false,
      isActiveUser: false,
      isActiveDialog: false,
    };
  }

  changeFixed = () => {
    if (window.scrollY >= 80) {
      this.setState({
        navbar: true,
      });
    } else {
      this.setState({
        navbar: false,
      });
    }
  };
  handleToggleMobile = () => {
    this.setState({
      isActiveMobile: !this.state.isActiveMobile,
    });
  };
  handleToggleUser = () => {
    this.setState({
      isActiveUser: !this.state.isActiveUser,
    });
  };
  handelDialog = () => {
    this.setState({
      isActiveDialog: !this.state.isActiveDialog,
    });
  };

  render() {
    window.addEventListener("scroll", this.changeFixed);
    const { navbar, isActiveMobile, isActiveUser, isActiveDialog } = this.state;

    return (
      <div className={navbar ? "menu fixed" : "menu"}>
        <div className='container menu-wrapper'>
          <div className='menu-left'>
            <div
              className='menu-mobile-toggle'
              onClick={() => this.handleToggleMobile()}
            >
              <i className='fa-solid fa-bars'></i>
            </div>
            <div className='logo'>
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </div>
            <div
              className={
                isActiveMobile ? "overlay active-overlay" : "menu-overlay"
              }
              onClick={() => this.setState({ isActiveMobile: false })}
            ></div>
            <nav
              className={
                isActiveMobile ? "navbar navbar-mobile-active" : "navbar"
              }
            >
              <div className='navbar-menu-mobile'>
                <div className='nav-sections'>
                  <div
                    onClick={() => this.handleToggleUser()}
                    className={
                      isActiveUser === false
                        ? "nav-sections-item nav-sections-active"
                        : "nav-sections-item"
                    }
                  >
                    Menu
                  </div>
                  <div
                    onClick={() => this.handleToggleUser()}
                    className={
                      isActiveUser
                        ? "nav-sections-item nav-sections-active"
                        : "nav-sections-item"
                    }
                  >
                    Tài Khoản
                  </div>
                </div>
                <div
                  className='navbar-mobile-close'
                  onClick={() => this.setState({ isActiveMobile: false })}
                >
                  <span>
                    <i className='fa-solid fa-xmark'></i>&nbsp;&nbsp;Đóng
                  </span>
                </div>
              </div>

              <ul
                className={
                  isActiveUser === false
                    ? "navbar-nav"
                    : "navbar-nav active-user"
                }
              >
                {nav &&
                  nav.length > 0 &&
                  nav.map((item, index) => (
                    <li className='nav-item' key={index}>
                      <NavLink to={item.link} className='nav-link'>
                        <span>{item.text}</span>
                      </NavLink>

                      {item.submenu && item.imageSubmenu && (
                        <div
                          className={
                            navbar ? "dropdown fixed-dropdown" : "dropdown"
                          }
                        >
                          <Dropdown
                            submenu={item.submenu}
                            imageSubmenu={item.imageSubmenu}
                          />
                        </div>
                      )}
                    </li>
                  ))}
              </ul>

              <ul
                className={
                  isActiveUser
                    ? "navbar-user-mobile"
                    : "navbar-user-mobile active-user"
                }
              >
                <li className='nav-user-mobile-item'>Tài khoản của tôi</li>
                <li className='nav-user-mobile-item'>Danh sách yêu thích</li>
                <li className='nav-user-mobile-item'>Đăng Nhập</li>
                <li className='nav-user-mobile-item'>Tạo tài khoản</li>
              </ul>
            </nav>
          </div>
          <div className='menu-right'>
            <div className='search-wrapper'>
              <label htmlFor=''>
                <i className='fa-solid fa-magnifying-glass'></i>
              </label>
              <input type='text' placeholder='Bạn tìm gì' />
            </div>
            <div className='menu-wrap-mobile'>
              <div className='icon-menu-mobile'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </div>
              <div
                className='icon-menu-mobile'
                onClick={() => this.handelDialog()}
              >
                <i className='fa-solid fa-cart-shopping'></i>
              </div>
            </div>
            <div className='menu-wrap-icon'>
              <div className='icon-menu'>
                <i className='fa-solid fa-heart'></i>
              </div>
              <div className='icon-menu'>
                <i className='fa-solid fa-user'></i>
              </div>
              <div className='icon-menu' onClick={() => this.handelDialog()}>
                <i className='fa-solid fa-cart-shopping'></i>
              </div>
            </div>
            <DialogCart isActiveDialog={isActiveDialog} isNavbar={navbar} />
          </div>
        </div>

        <div className='menu-mobile'></div>
      </div>
    );
  }
}

export default Menu;

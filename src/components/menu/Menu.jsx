import React, { Component } from "react";
import "./Menu.style.scss";
import logo from "../../assets/images/logo.png";
import nav from "../../data/nav";
import Dropdown from "../header/Dropdown";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false,
      isActiveMobile: false,
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

  render() {
    window.addEventListener("scroll", this.changeFixed);
    const { navbar, isActiveMobile } = this.state;
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
              <img src={logo} alt='logo' />
            </div>
            <div
              className={
                isActiveMobile ? "menu-overlay active-overlay" : "menu-overlay"
              }
              onClick={() => this.setState({ isActiveMobile: false })}
            ></div>
            <nav
              className={
                isActiveMobile ? "navbar navbar-mobile-active" : "navbar"
              }
            >
              <div
                className='navbar-mobile-close'
                onClick={() => this.setState({ isActiveMobile: false })}
              >
                <span>
                  <i className='fa-solid fa-xmark'></i>&nbsp;&nbsp;Đóng
                </span>
              </div>
              <ul className='navbar-nav'>
                {nav &&
                  nav.length > 0 &&
                  nav.map((item, index) => (
                    <li className='nav-item' key={index}>
                      <a className='nav-link' href='#'>
                        <span>{item.text}</span>
                      </a>
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
              <div className='icon-menu-mobile'>
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
              <div className='icon-menu'>
                <i className='fa-solid fa-cart-shopping'></i>
              </div>
            </div>
          </div>
        </div>

        <div className='menu-mobile'></div>
      </div>
    );
  }
}

export default Menu;

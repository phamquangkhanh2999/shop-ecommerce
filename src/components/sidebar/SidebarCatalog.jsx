import React, { Component } from "react";
import "./SidebarCatalog.style.scss";
import { sideBar } from "../../data/sidebar/sidebar";

class SidebarCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: "",
    };
  }
  render() {
    return (
      <div className='sidebar-catalog'>
        <div className='navigation-left'>
          <ul className='navigation-title'>
            {sideBar &&
              sideBar.length > 0 &&
              sideBar.map((item, index) => (
                <li
                  // className='category-item'
                  className={
                    index === +this.state.activeIndex
                      ? "category-item activeItem"
                      : "category-item"
                  }
                  key={index}
                  onClick={() => this.setState({ activeIndex: index })}
                >
                  <span className='category-item-title'>{item.title}</span>
                  <ul className='category-submenu'>
                    {item.lists &&
                      item.lists.length > 0 &&
                      item.lists.map((list, index) => (
                        <li className='category-submenu-item' key={index}>
                          {list.text}
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SidebarCatalog;

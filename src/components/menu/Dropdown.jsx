import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { submenu, imageSubmenu } = this.props;

    return (
      <div className='dropdown-wrapper'>
        <div className='dropdown-menu container'>
          <div className='row-dropdown'></div>
          {submenu &&
            submenu.length > 0 &&
            submenu.map((item, index) => (
              <div className='row-dropdown' key={index}>
                <h5 className='dropdown-title'>{item.title}</h5>
                {item.list &&
                  item.list.length > 0 &&
                  item.list.map((sub, i) => (
                    <ul className='list-category' key={i}>
                      <li className='dropdown-item'>{sub.text}</li>
                    </ul>
                  ))}
              </div>
            ))}
          <div
            className='row-dropdown'
            style={{
              backgroundImage: `url(${imageSubmenu})`,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Dropdown;

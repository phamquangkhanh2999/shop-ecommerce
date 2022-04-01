import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CheckBox.style.scss";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  onChange = () => {
    if (this.props.onChange) {
      this.props.onChange(this.inputRef.current);
    }
  };
  render() {
    return (
      <label className='custom-checkbox'>
        <input
          type='checkbox'
          ref={this.inputRef}
          onChange={this.onChange}
          checked={this.props.checked}
        />
        <span className='custom-checkbox__checkmark'>
          <i className='fa-solid fa-check'></i>
        </span>
        <span className='checkbox-text'>{this.props.label}</span>
      </label>
    );
  }
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default CheckBox;

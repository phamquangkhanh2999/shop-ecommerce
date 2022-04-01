import React, { Component } from "react";
import PropTypes from "prop-types";

class Grid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      gap: this.props.gap ? `${this.props.gap}px` : "0",
    };
    const col = this.props.col ? `grid-col-${this.props.col}` : "";
    const mdCol = this.props.mdCol ? `grid-col-md-${this.props.mdCol}` : "";
    const smCol = this.props.smCol ? `grid-col-sm-${this.props.smCol}` : "";
    return (
      <div>
        <div className={`grid ${col} ${mdCol} ${smCol}`} style={style}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  col: PropTypes.number.isRequired,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
};

export default Grid;

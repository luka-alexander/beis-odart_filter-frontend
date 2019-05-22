import React, { Component } from "react";

class FilterCheckboxes extends Component {

  render() {
    return (
      <div className="filter-container">
        <div className="filter-title">
          {this.props.title}
        </div>
        <div className="filter-dropdown">
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default FilterCheckboxes;

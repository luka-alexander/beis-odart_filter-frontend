import React, { Component } from "react";

import BaseLocale from "../../../locale/base"

class FilterKeyword extends Component {
  state = {
    keyword: "",
    category: "grantCall"
  }

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value
    })
  }

  handleChange = (event) => {
    this.setState({ keyword: event.target.value })
    clearTimeout(this.timeout);
    this.timeout = setTimeout( () => {
      this.props.callback(this.state.keyword, this.state.category);
    }, 500);
  }
  

  render() {
    return (  
      <section className="filter-keyword">
        <form>
          <input 
            type="text" 
            className="keyword-search" 
            onChange={this.handleChange} 
            placeholder={BaseLocale.keywordSearch}
          />
          <fieldset className="searchby-filter">
            <input 
              type="radio" name="searchby" value="grantCall" checked={true} onChange={this.handleCategoryChange} 
            />Grant Call
            <input 
              type="radio" name="searchby" value="description" onChange={this.handleCategoryChange} 
            />Description
          </fieldset>
        </form>
      </section>
    )
  }
}

export default FilterKeyword;

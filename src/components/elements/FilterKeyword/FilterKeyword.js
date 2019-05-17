import React, { Component } from "react";

import BaseLocale from "../../../locale/base"

class FilterKeyword extends Component {

  filterRecords = () => {
    // let updatedList = this.state.initialItems;
    // updatedList = updatedList.filter(function(item){
    //   return item.toLowerCase().search(
    //     event.target.value.toLowerCase()) !== -1;
    // });
    // this.setState({items: updatedList});
  }

  render() {
    return (  
      <section className="filter-keyword col-12">
        <form>
          <input type="text" className="keyword-search" onChange={this.filterRecords} placeholder={BaseLocale.keywordSearch} />
          <fieldset className="searchby-filter">
            <input type="radio" name="searchby" value="country" />Country 
            <input type="radio" name="searchby" value="category" />Category
            <input type="radio" name="searchby" value="programme" />Programme
          </fieldset>
        </form>
      </section>
    )
  }
}

export default FilterKeyword;
